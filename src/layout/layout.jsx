import { Outlet } from "react-router";

import NavBar from "./Navbar";

export default function Layout () {
    return (
        <>
        <Navbar />
        <main>
            <Outlet />
            </main>
            </>
    )
}