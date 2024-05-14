export interface ICharacter {
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