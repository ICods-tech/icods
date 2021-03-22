import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFollow1616431935171 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'followers',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name: 'userId',
						type: 'uuid'
					},
					{
						name: 'followingId',
						type: 'uuid'
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('followers')
	}
}
