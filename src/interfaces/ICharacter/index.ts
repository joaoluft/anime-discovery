export interface Character {
  character: {
    mal_id: number;
    name: string;
    images: {
      webp: {
        image_url: string;
        small_image_url: string;
      };
    };
  };
}