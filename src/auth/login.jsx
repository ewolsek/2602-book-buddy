import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "./authcontext"

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const tryLogin = async (FormData) => {
        setError(null);
        
        const username = FormData.get("username");
        const password = FormData.get("password");
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
        <form action={tryLogin}>
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
}