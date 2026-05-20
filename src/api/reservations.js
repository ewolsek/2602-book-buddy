const APi = import.meta.env.VITE_API;

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

export async function reserveBook(token, id) {
    const response = await fetch(API + "/reservations" + id, {
        method: "DELETE",
        headers: { Authorization: "Bearer" = token },
    });

    if (!response.ok) {
        const result = await response.json();
        throw Error(result.message);
    }
}