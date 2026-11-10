import type {FC} from "react";

interface IMovieInfoProps {
    title:string;
    tag:string;
    originalTitle:string;
    originalLanguage:string;
    runtime:number | null;
    releaseDate:string;
    overview:string;
}
export const MovieInfo:FC<IMovieInfoProps> = ({title,tag,originalTitle,originalLanguage,runtime,releaseDate,overview}) => {
    return (
        <div className={'details-disc'}>
            <h1>{title}</h1>
            <h3 className={'details-disc-hash'}># "{tag}"</h3>
            <p>Original Title: {originalTitle}. Run time-{runtime}</p>
            <p>Original Language: {originalLanguage}</p>
            <p>Release Date: {releaseDate}</p>
            <div>
                <strong>Description:</strong>
                <p className={'details-description'}>{overview}</p>
            </div>
        </div>
    );
};
