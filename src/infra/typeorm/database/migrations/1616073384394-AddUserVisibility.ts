import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUserVisibility1616073384394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'visibility',
            type: 'boolean',
            isNullable: false,
            default: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'visibility')
    }
}