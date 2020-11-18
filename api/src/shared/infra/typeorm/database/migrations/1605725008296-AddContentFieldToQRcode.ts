import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddContentFieldToQRcode1605725008296 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('qrcodes', new TableColumn({
        name: 'content',
        type: 'varchar',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('qrcodes', 'content')
    }
}
