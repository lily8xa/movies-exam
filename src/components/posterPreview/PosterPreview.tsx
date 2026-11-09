import {type FC, useState} from "react";

interface MoviePosterProps {
    posterPath?: string | null;
    backdropPath?: string | null
    title: string;
}

export const PosterPreview: FC<MoviePosterProps> = ({posterPath, title,backdropPath}) => {
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
    const defaultPoster = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/ae741a19835753.562e1115bf314.jpg'
    const relativePath = posterPath || backdropPath;

    const [imgSrc] = useState(relativePath ? `${imgBaseUrl}${relativePath}` : defaultPoster);
    return (
        <div>
            <img src={imgSrc} alt={title} loading="lazy"/>
        </div>
    );
}
