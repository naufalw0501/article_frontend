import Cookies from "js-cookie";
import { UserEntity } from "../entity/userEntity";
import { BASE_URL, HOME_URL } from "../../Constant";

class AuthService {
    static async login(username: string, password: string) {
        if (username === '' || password === '') throw new Error("Username and password are required!");

        try {
            const resp = await fetch(`${BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: username, password: password }),
            });

            const body = await resp.json();
            body.status = resp.status;

            if (body.status !== 200) {
                Cookies.remove("access_token");
                throw new Error(body.message);
            } else {
                if (!body.data.access_token) throw new Error(body.message);
                console.log("Login Success");
                Cookies.set("access_token", body.data.access_token);
                Cookies.set("refresh_token", body.data.refresh_token);
                return new UserEntity({ username: body.data.username, role: body.data.role });
            }
        } catch (error) {
            Cookies.remove("access_token");
            throw error;
        }
    }

    static async refreshLogin() {
        const refreshToken = Cookies.get("refresh_token"); // Pastikan Anda menyimpan refresh token
        console.log("oi")
        if (!refreshToken) return;
        console.log("oi2")
        try {
            const resp = await fetch(`${BASE_URL}/api/auth/refresh`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Pastikan untuk menetapkan header ini
                },
                body: JSON.stringify({ refreshToken }), // Kirim refresh token di body
            });
    
            const body = await resp.json();
    
            if (resp.status !== 200) throw new Error("TOKEN EXPIRED");
            if (body.status === 200) {
                // Simpan refresh token
                Cookies.set("refresh_token", body.data.refresh_token);
            }
            console.log("Token Refreshed");
            Cookies.set("access_token", body.data.access_token); // Simpan access token baru
            return new UserEntity({ username: body.data.username, role: body.data.role });
        } catch (error) {
            console.log(error);
            Cookies.remove("access_token");
            Cookies.remove("refresh_token"); // Hapus refresh token juga jika ada kesalahan
            throw error;
        }
    }
    

    static async logout() {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        window.location.href = HOME_URL;
    }
}

export { AuthService };
