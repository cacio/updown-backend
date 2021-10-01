import Cliente from '../models/Cliente';

export default {
    render(cliente: Cliente){
        return{
            id: cliente.id,
            nome: cliente.nome,
            cnpj: cliente.cnpj,
            cidade: cliente.cidade,
        }
    },
    renderMany(clientes: Cliente[]){
        return clientes.map(cliente=>this.render(cliente));        
    }
}