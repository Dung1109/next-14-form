import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
    id: int("id").autoincrement().primaryKey(),
    username: varchar("username", { length: 20 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    age: int("age").notNull(),
});
