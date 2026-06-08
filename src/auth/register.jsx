import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router";


export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const tryRegister = async (formData) => {
        setError(null)

        const email = formData.get("email");
        const name = formData.get("name")
        const password = formData.get("password")
        try {
            await register ({ email, password, name })
            navigate ("/")
        }
        catch (e) {
            setError(e.message);
        }
    }
    return 
    <div className="register-container">
        <h1>Register</h1>
        <form action={tryRegister}>
            <label>
                name
            </label>
            <label>
                email
            </label>
            <label>
                password
                <input type="password" name="password" required />
            </label>
            <button>Register</button>
            {error && <p role="alert">{error}</p>}
        </form>
        <p>
            Already have an account? <Link to="/login">Login here</Link>
        </p>
    </div>
}