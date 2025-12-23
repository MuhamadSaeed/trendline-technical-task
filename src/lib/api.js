const BASE_URL = "https://tinytales.trendline.marketing/api";

export async function registerUser(data) {
    try {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("mobile", data.mobile);
        formData.append("password", data.password);
        formData.append("password_confirmation", data.password); 
        formData.append("mobile_country_code", data.countryCode);

        const res = await fetch(BASE_URL + "/auth/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });

        const result = await res.json();

        return result;
    } catch (err) {
        console.log(err); 
        return;
    }
}


export async function verifyAccount(code, token) {
    try {
        const formData = new FormData();
        formData.append("code", code);

        const res = await fetch(BASE_URL + "/auth/verify-email", {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
            body: formData,
        });

        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
        return;
    }
}

export async function loginUser(data) {
    try {
        const formData = new FormData();

        formData.append("email", data.email);
        formData.append("password", data.password);

        const res = await fetch(BASE_URL + "/auth/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });

        const result = await res.json();
        return result;
    } catch (e) {
        console.log(e); 
        return;
    }
}
