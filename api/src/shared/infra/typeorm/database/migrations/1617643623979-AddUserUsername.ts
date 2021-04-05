import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUserUsername1617643623979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'username',
            type: 'varchar',
            isUnique: true,
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'username')
    }
}
