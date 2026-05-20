import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import { useAuth } from "../auth/AuthContext"

import BookDetail from "./BookDetails"

export default function BooksPage() {
    const { token } = useAuth();

    const [books, setBooks] = useState([]);

    const syncBooks = async () => {
        const data = await getBooks();
        setBooks(data);
    };
    useEffect (() => {
        syncBooks();
    }, {})

    return (
        <>
        <h1>Books</h1>
        <BookList books={books} />
        {token && <reserveBook syncBooks={syncBooks} />}
        </> 
    );
}