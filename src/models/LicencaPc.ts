import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('licenca_pc')
export default class LicencaPc{
    
    @PrimaryGeneratedColumn('increment')
    id:number;
    
    @Column()
    idCliente:number;
    
    @Column()
    token:string;

    @Column()
    apelido:string;
}