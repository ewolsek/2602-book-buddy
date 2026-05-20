import { Routes, Route } from "react-router";

import Layout from "./layout/layout";
import Register from "./auth/Register";
import Login from "./auth/login";
import BooksPage from "/books/BookPages";
import BookDetails from "/books/BookDetails"
import ReservationPage from "/reservations/ReservationsPage"
import ReservationDetails from "/reservations/ReservationDetails"
import Error404 from "./Error404.jsx";

export default function App() {
  return(
    <Routes>
      <Route element={<Layout />}>
      <Route index element={<BooksPage />} />
      <Route path="/books" element= {<BooksPage />} />
      <Route path="/books/:id" element= {<BookDetails />} />
      <Route path= "/reservations" element= {<ReservationsPage />} />
      <Route path= "/reservations/:id" element= {<ReservationDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}