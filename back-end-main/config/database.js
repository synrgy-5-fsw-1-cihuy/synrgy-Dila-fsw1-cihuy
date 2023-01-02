const {
  PGUSER = "",
  PGPASSWORD = "",
  PGDATABASE = "bcr",
  PGHOST = "127.0.0.1",
  PGPORT = "5432",
} = process.env;

module.exports = {
  development: {
    username: PGUSER,
    password: PGPASSWORD,
    database: `${PGDATABASE}_development`,
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres"
  },
  test: {
    username: PGUSER,
    password: PGPASSWORD,
    database: `${PGDATABASE}_test`,
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres"
  },
  production: {
    username: PGUSER,
    password: PGPASSWORD,
    database: `${PGDATABASE}_production`,
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres"
  }
}
