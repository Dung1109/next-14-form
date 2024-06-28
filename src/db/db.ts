// import "@/db/envConfig";
import { db } from ".";
import { User, users } from "./schema";
import { eq } from "drizzle-orm";

export const insertUser = async (data: User) => {
    try {
        let checkUser = await db
            .select()
            .from(users)
            .where(eq(users.username, data.username));
        console.log("Check user", checkUser);
        if (checkUser.length > 0) {
            return {
                message: "Username already exists",
            };
        }

        const user = {
            username: data.username,
            email: data.email,
            password: data.password,
            age: data.age,
        };
        await db.insert(users).values(user);
        const result = await db.select().from(users);
        console.log("Total users", result.length);
        return {
            message: "User registered successfully",
            user,
        };
    } catch (error) {
        console.log("Error", error);
        return {
            message: "Something went wrong",
            error,
        };
    }
};

export const getAllUser = async () => {
    try {
        const result = await db.select().from(users);
        console.log("Total users", result.length);
        return {
            message: "User registered successfully",
            user: result,
        };
    } catch (error) {
        console.log("Error", error);
        return {
            message: "Something went wrong",
            error,
        };
    }
};
