const HOST = process.env.HOST || "db";
const PATH_TYPEORM = process.env.PROD || "./dist";
const USERNAME = process.env.USERNAME || "postgres";
const PASSWORD = process.env.PASSWORD || "icods_password";

module.exports = {
  type: 'postgres',
  host: HOST,
  port: '5432',
  username: USERNAME,
  password: PASSWORD,
  synchronize: true,
  entities: [`${PATH_TYPEORM}/**/models/*`],
  migrations: [`${PATH_TYPEORM}/**/database/migrations/*`],
  cli: {
    migrationsDir: `${PATH_TYPEORM}/shared/infra/typeorm/database/migrations`,
  },
};
