import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class CreateUserRelationship1599860151030 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('qrcodes', new TableColumn({
      name: 'userId',
      type: 'uuid',
      isNullable: true
    }))

    await queryRunner.createForeignKey(
      'qrcodes',
      new TableForeignKey({
        name: 'userID',
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('qrcodes', 'userID')
    await queryRunner.dropColumn('qrcodes', 'userId')
  }
}
