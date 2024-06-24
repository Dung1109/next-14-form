"use server";

import { TUser, UserSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";

export const onFormAction = async (
    prevState: {
        message: string;
        user?: TUser;
        issues?: string[];
    },
    formData: FormData
) => {
    const data = Object.fromEntries(formData);
    const parsed = await UserSchema.safeParseAsync(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (parsed.success) {
        console.log("User registered - Server");
        revalidatePath("/");
        return { message: "User registered!!", user: parsed.data };
    } else {
        return {
            message: "Invalid data",
            issues: parsed.error.issues.map((issue) => issue.message),
        };
    }
};
