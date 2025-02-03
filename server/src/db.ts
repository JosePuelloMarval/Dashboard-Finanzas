import { DataSource } from "typeorm";
import  "dotenv/config";
import { User } from "./entities/users/User";
import { Category } from "./entities/categories/Category";
import { PaymentMethod } from "./entities/paymentMethods/PaymentMethod";
import { Transaction } from "./entities/transactions/Transaction";

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE} =  process.env;
console.log(DB_DATABASE, DB_HOST);


export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: DB_PORT ? parseInt(DB_PORT) : 3306,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE, 
    synchronize: true,
    logging: false,
    entities: [
        User,
        Category,
        PaymentMethod,
        Transaction
     ],
    // subscribers: [],
    // migrations: [/*...*/],
    // migrationsTableName: "custom_migration_table",
})