export interface GiphyGif {
  images: {
    fixed_width: {
      url: string;
    };
  };
}

export interface GiphyApiResponse {
  data: GiphyGif[];
}
