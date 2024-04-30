import axios from "axios";
export const useApi = () => {

    const api = axios.create({
        baseURL: "https://api.jikan.moe/v4/",
    });

    const getAnimeList = async (page: number) => {
        return await api.get(`/top/anime?page=${page}`);
    };

    const getAnimeDetails = async (id: number) => {
        return await api.get(`/anime/${id}`);
    }

    const getCharacters = async (id: number) => {
        return await api.get(`/anime/${id}/characters`);
    }

    return {
        getAnimeList,
        getAnimeDetails,
        getCharacters
    };
};
