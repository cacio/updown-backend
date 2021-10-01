import {Request,Response} from 'express';
import { getRepository } from "typeorm";
import LicencaPc from '../models/LicencaPc';
export default {

    async index(request: Request,response:Response){
        const licencapcRepository = getRepository(LicencaPc);

        const licencapc = await licencapcRepository.find();

        return response.json(licencapc);
    },
    async show(request: Request,response:Response){
        const {id} = request.params;

        const licencapcRepository = getRepository(LicencaPc);

        const licencapc = await licencapcRepository.findOneOrFail(id);

        return response.json(licencapc);
    },
    async showPorCliente(request: Request,response:Response){
        const {idcli} = request.params;

        const licencapcRepository = getRepository(LicencaPc);

        const licencapc = await licencapcRepository.find({
            where:{
                idCliente:idcli
            }
        });
        
        return response.json(licencapc);
    },
    async create(request: Request,response:Response){
        const {
            idCliente,
            token,
            apelido
        } = request.body;
    
        const licencapcRepository = getRepository(LicencaPc);
    
        const licencapc = licencapcRepository.create({
            idCliente,
            token,
            apelido
        });
    
       await licencapcRepository.save(licencapc);
    
        return response.status(201).json(licencapc);

    }

}