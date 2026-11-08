import {type FC, useState} from "react";

interface MoviePosterProps {
    posterPath: string | null;
    title: string;
}
export const PosterPreview:FC<MoviePosterProps>=({posterPath,title}) =>{
    const imgBaseUrl ="https://image.tmdb.org/t/p/w500";
    const defaultPoster='https://www.google.com/imgres?q=drawing%20%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%20no%20poster&imgurl=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fhd_webp%2Fae741a19835753.562e1115bf314.jpg&imgrefurl=https%3A%2F%2Fwww.behance.net%2Fgallery%2F19835753%2FNO-MONEY-NO-DRAWING&docid=sfoqNCk-vX8OjM&tbnid=18GuGHdAB3YI7M&vet=12ahUKEwj61pbKrfiXAxU6GxAIHV0pF70QnPAOegUIuQEQAA..i&w=827&h=1169&hcb=2&ved=2ahUKEwj61pbKrfiXAxU6GxAIHV0pF70QnPAOegUIuQEQAA'
   const [imgSrc]=useState(    posterPath ? `${imgBaseUrl}${posterPath}` : defaultPoster);
    return (
        <div>
            <img src={imgSrc} alt={title}  loading="lazy"/>
        </div>
    );
}
