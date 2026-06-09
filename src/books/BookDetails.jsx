import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router";
import { reserveBook, getBooks } from "../api/reservations"
import { useAuth } from "../auth/AuthContext";


export default function BookDetails() {
    const { token } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const syncBooks = async () => {
            const data =await getBooks(id);
            setBook(data);
        };
        syncBooks();
    }, [id]);

    const tryReserve = async () => {
        setError(null);

        try {
            await reserveBook(token, book.id);
            navigate ("/books");
        } catch (e) {
            setError(e.message);
        }
    };
    if (!book) return <p>Loading...</p>;

    return (
        <article>
            <h1>{book.name}</h1>
            <p>{book.description}</p>
            {token &&<button onClick={tryReserve}>Reserve</button>}
            {error && <p role="alert">{error}</p>}
        </article>
    );
}