import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateQRCodeRelationship1599860135816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('users', new TableColumn({
        name: 'qrcode_ids',
        type: 'uuid',
        isNullable: true
      }))


      await queryRunner.createForeignKey(
          'users',
          new TableForeignKey({
            name:'QRCodeID',
            columnNames: ['qrcode_ids'],
            referencedTableName: 'qrcodes',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users', 'QRCodeID')
      await queryRunner.dropColumn('users', 'qrcode_ids')
    }
}
