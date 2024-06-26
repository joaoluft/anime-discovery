import axios from "axios";
export const useApi = () => {

    const api = axios.create({
        baseURL: "https://api.jikan.moe/v4/",
    });

    const getAnimeList = async (page: number, type: string, order: string, rating: string) => {
        return await api.get(`/top/anime?page=${page}&type=${type}&filter=${order}&rating=${rating}`);
    };

    const getAnimeDetails = async (id: number) => {
        return await api.get(`/anime/${id}`);
    }

    const getCharacters = async (id: number) => {
        return await api.get(`/anime/${id}/characters`);
    }

    const searchAnime = async (search: string) => {
        return await api.get(`/anime?q=${search}`);
    }

    return {
        getAnimeList,
        getAnimeDetails,
        getCharacters,
        searchAnime
    };
};
