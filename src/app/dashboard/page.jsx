"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (!token || !storedUser) {
            router.push("/login");
            return;
        }

        try {
            // convert the data to object
            setUser(JSON.parse(storedUser));
        } catch (e) {
            console.log(e);
        }
    }, []);

    // cuz the user will be null at first
    if (!user) {
        return <p className="p-12 text-center">wait plz</p>;
    }

    return (
        <div className="p-12 text-center">
            <p>welcome {user.name}</p>
        </div>
    );
}
