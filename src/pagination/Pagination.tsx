import type {FC} from "react";
import {useSearchParams} from "react-router";

interface PaginationProps {
        total: number;
        limit: number;
    }
    export const Pagination:FC<PaginationProps> = ({total,limit}) => {
        const [searchParam,setSearchParam]=useSearchParams({page:'1'});
        let currentPage=Number(searchParam.get('page') ||'1');

        const safeTotal = (typeof total !== 'number' || isNaN(total) || total <= 20)
            ? 10000
            : total;

        const safeLimit = (typeof limit !== 'number' || isNaN(limit) || limit <= 0)
            ? 20
            : limit;


        const calculatedMaxPage = Math.ceil(safeTotal / safeLimit);

        const maxPage = calculatedMaxPage > 500 ? 500 : calculatedMaxPage;


        console.log({ currentPage, maxPage });
    return (
        <div>
            <button onClick={()=>{
                if(currentPage>1){
                    setSearchParam({page:(--currentPage).toString()})
                }}}>Prev</button>
            <button className={'button'} onClick={()=>{
                setSearchParam({page:(currentPage+1).toString()
                })
            }}
                    disabled={currentPage >= maxPage}>Next</button>
        </div>
    );
}
