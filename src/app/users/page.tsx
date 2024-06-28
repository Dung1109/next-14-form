"use client";

import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";

export default function UsersPage() {
    const data = [
        {
            id: "1",
            amount: 100,
            status: "pending",
            email: "test@test.com",
        },
        {
            id: "2",
            amount: 200,
            status: "processing",
            email: "test2@test.com",
        },
        {
            id: "3",
            amount: 300,
            status: "success",
            email: "test3@test.com",
        },
        {
            id: "4",
            amount: 400,
            status: "failed",
            email: "test4@test.com",
        },
    ];

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
