import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createCliente1632426210445 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'clientes',
            columns: [
               {
                   name:'id',
                   type:'integer',
                   unsigned:true,
                   isPrimary:true,
                   isGenerated:true,
                   generationStrategy:'increment'
               },
               {
                   name:'nome',
                   type:'varchar'
               },
               {
                   name:'cnpj',
                   type:'varchar'
               },
               {
                   name:'cidade',
                   type:'varchar'
               }

            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clientes');
    }

}
