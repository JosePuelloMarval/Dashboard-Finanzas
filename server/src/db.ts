import { DataSource } from "typeorm";
import { User } from "./entities/users/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin123",
    database: "dashboard", 
    synchronize: true,
    logging: false,
    entities: [
        User,
     ],
    // subscribers: [],
    // migrations: [/*...*/],
    // migrationsTableName: "custom_migration_table",
})