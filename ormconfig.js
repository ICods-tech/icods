const HOST = process.env.HOST || "icods-api-db.chgmd4vaiix6.us-east-1.rds.amazonaws.com";
const PATH_TYPEORM = process.env.PROD || "./dist";
const USERNAME = process.env.POSTGRES_USERNAME;
const PASSWORD = process.env.POSTGRES_PASSWORD;

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
