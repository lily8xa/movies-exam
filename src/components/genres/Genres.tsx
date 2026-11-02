import type {FC} from "react";

interface GenreBadgeProps {
    name: string;
}

export const Genres:FC<GenreBadgeProps> = ({name}) => {

    return (
        <div>
            {name}
        </div>
    );

}
