import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import { useAuth } from "../auth/AuthContext"
import { Link, useNavigate, useLocation } from "react-router"
import { reserveBook } from "../api/reservations";
import { getBooks } from "..api/books"
import { bookDetail } from "./BookDetails"

export default function BooksPage() {
    const { token } = useAuth();

    const [books, setBooks] = useState([]);

    const tryReserve async (bookId) =>{
        try {
            await reserveBook(token, bookId)
            setShowConfirm(false);
            fetchBooks();
        } catch(e) {
            setError(e.message);
        }
    }

    async function fetchBooks(); {
        const data = await getBooks();
        setBooks(data);
    };
    useEffect (() => {
        syncBooks();
    }, [])

    return (
        <>
        <h1>Books</h1>
        <BookList books={books} />
        {token && <reserveBook syncBooks={syncBooks} />}
        </> 
    );
}