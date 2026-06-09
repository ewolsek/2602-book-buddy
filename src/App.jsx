import Layout from "./layout/Layout.jsx";
import Register from "./auth/Register";
import Login from "./auth/login";
import BookList from "./books/BookList";
import BookDetails from "./books/BookDetails"
import Account from "./auth/Account";
import Error404 from "./Error404.jsx";

import { Routes, Route } from "react-router";
export default function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout />}>
      <Route index element={<BookList />} />
      <Route path="books" element= {<BookList />} />
      <Route path="books/:id" element= {<BookDetails />} />
      <Route path="account" element={<Account />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}