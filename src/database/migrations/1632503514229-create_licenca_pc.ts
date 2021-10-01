import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createLicencaPc1632503514229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
           name:'licenca_pc',
           columns :[
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'idCliente',
                    type:'integer'
                },
                {
                    name:'token',
                    type:'varchar'
                },
                {
                    name:'apelido',
                    type:'varchar'
                }
           ],
           foreignKeys: [
               {
                   name:'LicencaCliente',
                   columnNames:['idCliente'],
                   referencedTableName:'clientes',
                   referencedColumnNames:['id'],
                   onUpdate:'CASCADE',
                   onDelete:'CASCADE',
               }
           ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('licenca_pc');
    }

}
