import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1598735420109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS uuid-ossp');

      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true,
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users')
    }
}
