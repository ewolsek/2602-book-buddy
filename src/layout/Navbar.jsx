import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function NavBar() {
    const { token, logout } = useAuth();
    return (
        <header>
            <p>Book Buddy</p>
            <nav>
                <Link to="/books">Books</Link>
                <Link to ="/account">Account</Link>
       {token ? (
                    <button onClick={logout}>
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
        </header>
    );
}