import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
    const { token, logout } = useAuth();
    return (
        <header>
            <p>Book Buddy</p>
            <nav>
                <NavLink to="/books">Books</NavLink>\
                <NavLink to = "/Account">Account</NavLink>
                {token ? (
                    <a onClick={() => logout()}>Logout</a>
                ) : (
                    <>
                    <NavLink to= "/register">Register</NavLink>
                    <NavLink to ="/login">Login</NavLink>
                    </>
                )}
            </nav>
        </header>
    )
}