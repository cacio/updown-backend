import {Request,Response} from 'express';
import { getRepository } from "typeorm";
import Cliente from "../models/Cliente";
import clienteView from "../views/clientes_views";
import * as Yup from 'yup';

export default {

    async index(request: Request,response:Response){
        const clientesRepository = getRepository(Cliente);
        
        const clientes = await clientesRepository.find();
        
        return response.json(clienteView.renderMany(clientes));

    },

    async show(request: Request,response:Response){

        const {id} = request.params;

        const clientesRepository = getRepository(Cliente);
        
        const cliente = await clientesRepository.findOneOrFail(id);

        return response.json(clienteView.render(cliente));

    },

    async create(request: Request,response:Response){
        const {
            nome,
            cnpj,
            cidade
        } = request.body;
    
        const clientesRepository = getRepository(Cliente);
        

        const data = {
            nome,
            cnpj,
            cidade
        }

        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            cnpj:Yup.string().required(),
            cidade:Yup.string().required(),
        });


       const cliente = clientesRepository.create(data);
       
       await schema.validate(data,{
           abortEarly:false,
       });
       
       await clientesRepository.save(cliente);
    
       return response.status(201).json(cliente);

    }

}