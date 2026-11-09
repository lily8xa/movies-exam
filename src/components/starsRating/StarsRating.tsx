import {type FC} from "react";
import {Rating} from "react-simple-star-rating";

interface StarProps{
    voteAverage:number
}

export const StarsRating:FC<StarProps>=({voteAverage})=>{
 {
     return (
            <><Rating className={'movie-rating-wrapper'}
                      initialValue={voteAverage / 2}
                      readonly={true}
                      size={20}/></>
        );
    }
}
