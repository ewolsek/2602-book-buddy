import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate, useLocation } from "react-router";
import { reserveBook } from "../api/reservations";

export default function BookList() {
  const { token } = useAuth();

  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const tryReserve = async (bookId) => {
    try {
      await reserveBook(token, bookId);
      await syncBooks();
    } catch (e) {
      setError(e.message);
    }
  };

  const syncBooks = async () => {
    try {
    const data = await getBooks();
    if (data && Array.isArray(data.books)) {
        setBooks(data.books);
      } else if (Array.isArray(data)) {
        setBooks(data);
      } else {
        setBooks([]);
      }
    } catch (e) {
      setError("Failed to fetch books.");
    }
  };

  useEffect(() => {
    syncBooks();
  }, []);

return (
    <div className="books-container">
      <h1>Books</h1>
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul className="books-list">
        {books && books.map((book) => (
          <li key={book.id} className="book-item" style={{ marginBottom: "15px" }}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <Link to={`/books/${book.id}`}>View Details</Link>
            {" | "}
            {token && (
              <button onClick={() => tryReserve(book.id)}>
                Reserve Book
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
