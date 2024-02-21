export const fetchMovies = async () => {
    try {
        const data = await fetch("data.json");

        return await data.json();
    } catch {
        throw new Error();
    }
};