import { mysqlTable } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
    id: mysqlTable.integer("id").primaryKey(),
    name: mysqlTable.string("name").notNull(),
    email: mysqlTable.string("email").notNull(),
    password: mysqlTable.string("password").notNull(),
    createdAt: mysqlTable.datetime("created_at").defaultNow(),
});
