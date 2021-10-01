import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createVersoes1632507244159 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name:'versoes',
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
                    name:'idModulo',
                    type:'integer'
                },
                {
                    name:'release',
                    type:'varchar'
                },
                {
                    name:'dataVersao',
                    type:'varchar'
                },
                {
                    name:'Opcional',
                    type:'varchar'
                },
                {
                    name:'dataLimiteAtualizacao',
                    type:'varchar'
                },
                {
                    name:'msgGerenciadorVersoes',
                    type:'varchar'
                }
            ],
            foreignKeys: [
                {
                    name:'modulo',
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
        await queryRunner.dropTable('versoes');
    }

}
