import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, int, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const users = mysqlTable("users", {
	id: int("id").autoincrement().notNull(),
	username: varchar("username", { length: 20 }).notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	password: varchar("password", { length: 255 }).notNull(),
	age: int("age").notNull(),
},
(table) => {
	return {
		email_unique: index("users_email_unique").on(table.email),
	}
});