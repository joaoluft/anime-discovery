import axios from "axios";
export const useApi = () => {

    const api = axios.create({
        baseURL: "https://api.jikan.moe/v4/",
    });

    const getAnimeList = async () => {
        return await api.get("/top/anime");
    };

    const getAnimeDetails = async (id: number) => {
        return await api.get(`/anime/${id}`);;
    }

    const getCharacter = async (id: number) => {
        return await api.get(`/characters/${id}`);
    }

    return {
        getAnimeList,
        getAnimeDetails,
        getCharacter
    };
};
