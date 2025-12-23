"use client";

import { useState } from "react";
import { registerUser } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        countryCode: "",
    });
    const router = useRouter()

    const handleChange = (e) => {
        // e.target is the "input"
        console.log(e.target);    
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // send the form to the register api
        const result = await registerUser(form);

        console.log(result);

        // status will be true when the register successs
        if (result && result.status) {
            const token = result.data.token;
            // save token to local storage and i will save the user data on "login" 
            localStorage.setItem("token", token);

            router.push("/verify");

        }
        else {
            alert("register didnt complate");
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-md shadow" >
            <h2 className="text-xl font-semibold mb-4 text-center">register</h2>

                <input name="name" placeholder="full name" onChange={handleChange}
                    className="w-full mb-3 px-3 py-2 border rounded text-sm"
                />

                <input name="email" placeholder="mail" onChange={handleChange}
                    className="w-full mb-3 px-3 py-2 border rounded text-sm"
                />

                <input name="password" type="password" placeholder="password" onChange={handleChange}
                    className="w-full mb-3 px-3 py-2 border rounded text-sm"
                />

                <input name="mobile" placeholder="phone num" onChange={handleChange}
                    className="w-full mb-3 px-3 py-2 border rounded text-sm"
                />

                <input name="countryCode" placeholder="country code" onChange={handleChange}
                   className="w-full mb-4 px-3 py-2 border rounded text-sm"
                />

                <button type="submit" className="w-full bg-green-600 cursor-pointer text-white py-2 rounded">register</button>
        </form>
    </div>
  );
}
