import "@/db/envConfig";
import { db } from ".";
import { User, users } from "./schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export const insertUser = async (data: User) => {
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
    return NextResponse.json({
        message: "User registered successfully",
        user,
    });
};
