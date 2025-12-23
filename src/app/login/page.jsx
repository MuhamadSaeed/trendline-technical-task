"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/api";

export default function LoginPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await loginUser(form);

        console.log(result);

        if (result && result.status) {
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("user", JSON.stringify(result.data)); 

            router.push("/dashboard");
        } else {
            alert("failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4 text-center">login</h2>

            <input name="email" placeholder="mail" onChange={handleChange} 
                className="w-full mb-3 px-3 py-2 border rounded text-sm"
            />

            <input name="password" type="password" placeholder="passord" onChange={handleChange}
                className="w-full mb-4 px-3 py-2 border rounded text-sm"
            />

            <button type="submit" className="w-full bg-green-600 cursor-pointer text-white py-2 rounded">login</button>
        </form>
        </div>
    );
}
