import type {FC} from "react";

interface GenreBadgeProps {
    id:number
    name: string;
}

export const Genres:FC<GenreBadgeProps> = ({name}) => {

    return (
        <div>
            {name}
        </div>
    );

}
