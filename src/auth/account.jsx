import { useAuth } from "./AuthContext";
import { Link } from "react-router";
import { useEffect, useState } from "react"
import { returnBook } from "../api/reservations"

export default function Account() {
    const { token, data, account } = useAuth();
    const [selectedReturn, setSelectedReturn] = useState(null)
    
    useEffect (() => {
        account();
    }, [])
    if (!token) {
        return(
            <div className="account-container">
                <p className="not-logged-in">
                    <Link to="/login">Login</Link>
                    <Link to ="/register">Register</Link>
                </p>
            </div>
        )
    }
    if (!data) return <p>loading</p>
    return (
      <div className="account-container">
            <div className="account">
                <h1>Account</h1>
                <ul>
                    {data.reservations && data.reservations.map((reservation) => (
                        <li key={reservation.id}>
                            {reservation.title}
                            <Link to={`/books/${reservation.bookid}`}>Details</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}