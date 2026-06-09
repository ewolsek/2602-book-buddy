import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext"

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const tryLogin = async (e) => {
        e.preventDefault();
        setError(null);

    const tryLogin = async (formData) => {
        setError(null);
        
        const username = formData.get("username");
        const password = formData.get("password");
        try {
            await login({ username, password });
            navigate("/books");
        } catch (e) {
            setError(e.message);
        }
    };
    return (
        <>
        <h1>Log in to your account</h1>
        <form onSubmit={tryLogin}>
            <label>
                Username 
                <input type="text" name= "username" required />
                </label>
                <label>
                    Password
                    <input type="password" name= "password" required />
                    </label>
                    <button>Login</button>
                    {error && <p role="alert">{error}</p>}
                    </form>
                    <Link to="/register">Register Here.</Link>
                    </>
    );
}}