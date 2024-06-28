"use client";

import { useRouter } from "next/navigation";

type Props = {
    params: { id: string };
};

export default function Employee({ params }: Props) {
    const router = useRouter();
    // const result = router.query.id;

    return <div>Employee {params.id}</div>;
}
