import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createModulos1632505422818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'modulos',
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
                   name:'nomeExecutavel',
                   type:'varchar'
               },
               
            ],
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('modulos');
    }

}
