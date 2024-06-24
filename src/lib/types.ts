import { ZodType, z } from "zod";

export const UserSchema: ZodType<FormData> = z
    .object({
        username: z
            .string()
            .trim()
            .min(3, {
                message: "Username must be at least 3 characters long",
            })
            .max(20, {
                message: "Username must be at most 20 characters long",
            }),
        email: z.string().email({
            message: "Email is not valid",
        }),
        password: z
            .string()
            .min(6, {
                message: "Password must be at least 6 characters long",
            })
            .max(20, {
                message: "Password must be at most 20 characters long",
            }),
        confirmPassword: z
            .string()
            .min(6, {
                message: "Password must be at least 6 characters long",
            })
            .max(20, {
                message: "Password must be at most 20 characters long",
            }),
        age: z.coerce
            .number()
            .gte(5, {
                message: "Age must be at least 5",
            })
            .lte(200, {
                message: "Age must be at most 200",
            }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

export type TUser = z.infer<typeof UserSchema>;
