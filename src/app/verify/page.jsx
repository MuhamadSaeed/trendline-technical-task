"use client";

import { useState } from "react";
import { verifyAccount } from "@/lib/api";

export default function VerifyPage() {
    const [code, setCode] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        const result = await verifyAccount(code, token);

        console.log(result);

        if (result && result.status) {
            alert("done");
        } else {
            alert("failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white-50 p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4 text-center">verify accountt</h2>

                <input placeholder="verify code" onChange={(e) => setCode(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded text-sm"
                />

                <button type="submit" className="w-full bg-green-600 cursor-pointer text-white py-2 rounded">verfi</button>
            </form>
        </div>
    );
}
