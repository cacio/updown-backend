import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('clientes')
export default class Cliente{
    
    @PrimaryGeneratedColumn('increment')
    id:number;
    
    @Column()
    nome:string;
    
    @Column()
    cnpj:string;

    @Column()
    cidade:string;
}