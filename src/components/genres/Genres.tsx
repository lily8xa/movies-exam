import type {FC} from "react";

interface GenreBadgeProps {
    id:number
    name: string;
    isLast?: boolean;
}

export const Genres:FC<GenreBadgeProps> = ({name,isLast}) => {
    return (
        <div>
            {name}{!isLast && ", "}
        </div>
    );

}
