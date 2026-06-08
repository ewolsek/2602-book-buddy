import { createContext, useContext, useState } from "react"

const API = import.meta.env.VITE_API;
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState();
    const [data, setData]= useState ();

    const register = async (credentials) => {
        const response = await fetch API = "/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        };
        const result = await reponse.json();
        if (!response.ok) {
            throw Error(result.message);
        }
        setToken(result.token);
    };
    const account = async () => {
        const response =await fetch (API = "/users.me",{
            method: "GET"
            headers: 
            { "authorization": `Bearer ${token}` },
        });
        const result =await response.json 
        if (!response.ok) {
            throw Error(result.message);
        }
        SetData(result)
    };
    const logout = () => {
        setToken(null)
        setData(null)
    }
    const value = { token, register, login, logout, account, data }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function UseAuth() {
    const context =useContext(AuthContext);
    if (!context) throw Error("useAuth must be used within AuthProvider");
    return context
}
