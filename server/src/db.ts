import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin123",
    database: "dashboard", 
    synchronize: true,
    logging: false,
    entities: [ ],
    // subscribers: [],
    // migrations: [/*...*/],
    // migrationsTableName: "custom_migration_table",
})