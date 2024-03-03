interface UnsplashPhoto {
  id: string;

}

export interface UnsplashResponse {
  results: UnsplashPhoto[];

}

export const baseDefaultUrl: string =
  "https://api.unsplash.com/photos?order_by=popular&per_page=20&client_id=GqPpE-2yS8MCcz68Iva9a0K5jrFPrCqOoGwqE1-Y2-Y&page=1";

export const baseSearchURL: string =
  "https://api.unsplash.com/search/photos?client_id=GqPpE-2yS8MCcz68Iva9a0K5jrFPrCqOoGwqE1-Y2-Y&per_page=20";

