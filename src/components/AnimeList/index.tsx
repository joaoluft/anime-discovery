import { useAnimeList } from "../../hooks/useAnimeList"  
export const AnimeList = () => {
    const { animeList } = useAnimeList();
    console.log(animeList)
    const renderAnimes = () => {
        return animeList.data.map(anime => {
            console.log(anime)
            return (
                <>
                    <div>{anime.title}</div>
                    <div>{anime.mal_id}</div>
                    <img src={anime.images.webp.image_url}></img>
                </>
            )
        }
        )
    }

    return (
        <div>
            {renderAnimes()}
        </div>
    );
}