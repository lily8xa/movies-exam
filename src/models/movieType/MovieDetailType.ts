export type MovieDetailType ={
    id: number;
    title: string;
    original_title: string;
    original_language: string;
    overview: string;
    backdrop_path: string | null;
    poster_path: string | null;
    release_date: string;
    runtime: number | null;
    budget: number;
    status: string;
    genres: { id: number; name: string }[];
    tagline:string;
}
