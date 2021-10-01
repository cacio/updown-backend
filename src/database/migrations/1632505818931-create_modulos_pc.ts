import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createModulosPc1632505818931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'modulos_pc',
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
                    name:'idLicencaPC',
                    type:'integer'
                },
                {
                    name:'idModulo',
                    type:'integer'
                },
                {
                    name:'caminho',
                    type:'varchar'
                },
                {
                    name:'dataVersao',
                    type:'varchar'
                },
                {
                    name:'dataUltimaAtualizacao',
                    type:'varchar'
                }
            ],
            foreignKeys: [
                {
                    name:'licencapc',
                    columnNames:['idLicencaPC'],
                    referencedTableName:'licenca_pc',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',
                },
                {
                    name:'modulos',
                    columnNames:['idModulo'],
                    referencedTableName:'modulos',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('modulos_pc');
    }

}
