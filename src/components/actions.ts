import { TUser, UserSchema } from "@/lib/types";

export const onFormAction = async (
    prevState: {
        message: string;
        user?: TUser;
        issues?: string[];
    },
    formData: FormData
) => {
    "use server";

    const data = Object.fromEntries(formData);
    const parsed = await UserSchema.safeParseAsync(data);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (parsed.success) {
        console.log("User registered - Server");
        return { message: "User registered!!", user: parsed.data };
    } else {
        return {
            message: "Invalid data",
            issues: parsed.error.issues.map((issue) => issue.message),
        };
    }
};
