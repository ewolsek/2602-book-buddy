import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function Layout () {
    return (
        <>
        <NavBar />
        <main>
            <Outlet />
            </main>
            </>
    )
}