const API = import.meta.env.VITE_API;

export async function getReservations() {
    try {
        const response = await fetch(API + "/reservations");
        const result = await response.json();
        return result;
    } catch (e) {
        return [];
    }
}

export async function getReservation(id) {
    try {
        const response = await fetch(API = "/reservations/" + id);
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function reserveBook(token, bookId) {
    if (!token) {
        throw Error("You must be logged in to reserve a book");
    }
    const response = await fetch(API + "/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ bookId }),
    });

    if (!response.ok) {
        const result = await response.json();
        throw Error(result.message);
    }
    return await response.json();
}
export async function getBooks(id) {
    const response = await fetch(API + "/books/" + id);
    if (!response.ok) {
        throw Error("Failed to fetch book details.");
    }
    const result = await response.json();
    return result.book || result; 
}
export async function returnBook(token, reservationId) {
    if (!token) {
        throw Error("You must be logged in to return a book");
    }
    
    const response = await fetch(API + "/reservations/" + reservationId, {
        method: "DELETE",
        headers: { 
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    });

    if (!response.ok) {
        const result = await response.json();
        throw Error(result.message || "Failed to return the book.");
    }

    return await response.json();
}