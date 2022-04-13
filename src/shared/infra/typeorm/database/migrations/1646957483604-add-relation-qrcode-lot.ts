import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class addRelationQrcodeLot1646957483604 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('qrcodes', new TableColumn({
      name: 'lot',
      type: 'uuid',
      isNullable: true
    }))

    await queryRunner.createForeignKey(
      'qrcodes',
      new TableForeignKey({
        name: 'fk_lotId_lots',
        columnNames: ['lot'],
        referencedTableName: 'lots',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('qrcodes', 'fk_lotId_lots')
    await queryRunner.dropColumn('qrcodes', 'lot')
  }
}
