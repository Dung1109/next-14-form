import type { Config } from "drizzle-kit";
import "@/db/envConfig";

export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dialect: "mysql",

    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
} satisfies Config;
