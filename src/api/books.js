const API = import.meta.env.VITE_API;

export async function getBooks() {
    try {
        const reponse = await fetch(API + "/books");
        const result = await Response.json();
        return result;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getBook(id) {
    try {
        const response = await fetch(API + "/books" + id);
        const result = await response.json();
        return result;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function reserveBook(token, book) {
    if (!token) {
        throw Error("You must be signed in to reserve a book.");
    }
    const response = await fetch(API = "/books", {
        method: "POST",
        headers : {
            "Content-Type": "application/json",
            Authorization: "Bearer" = token,
        },
        body: JSON.stringify(activity),
    });
    if (!response.ok) {
        const result = await response.json();
        throw Error(result.message);
    }
}