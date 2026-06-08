import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
    const { token, logout } = useAuth();
    return (
        <header>
            <p>Book Buddy</p>
            <nav>
                <Link to="/books">Books</Link>
                <Link to ="/Account">Account</Link>
                {token ? (
                    <a onClick={() => logout()}>Logout</a>
                ) : (
                    <>
                    <Link to= "/register">Register</Link>
                    <Link to ="/login">Login</Link>
                    </>
                )}
            </nav>
        </header>
    )
}