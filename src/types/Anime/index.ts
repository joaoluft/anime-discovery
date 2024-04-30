export type Anime = {
    mal_id: number
    thumbnail: string
    title: string
    rank: number
    images: {
        webp: {
            image_url: string;
        };
    };
    onClick: () => void
}