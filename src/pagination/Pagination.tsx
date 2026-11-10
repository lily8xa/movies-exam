import {type FC, useEffect} from "react";
import {useSearchParams} from "react-router";
import './Pagination.css'
interface PaginationProps {
        total: number;
        limit: number;
    }
    export const Pagination:FC<PaginationProps> = ({total,limit}) => {
        const [searchParam,setSearchParam]=useSearchParams({page:'1'});
        let currentPage=Number(searchParam.get('page') ||'1');
        const safeTotal = (typeof total !== 'number' || isNaN(total) || total <= 20) ? 10000 : total;
        const safeLimit = (typeof limit !== 'number' || isNaN(limit) || limit <= 0) ? 20 : limit;
        const calculatedMaxPage = Math.ceil(safeTotal / safeLimit);
        const maxPage = calculatedMaxPage > 1100 ? 1100 : calculatedMaxPage;
        const changePage=(pageNumber:number)=>{setSearchParam({page:pageNumber.toString()})};
        const getPageNumber=()=>{
          const pages:(number|string)[]=[];
          const siblingCount=2;
        if(maxPage<=10){for(let i=1; i<=maxPage;i++)pages.push(i);
            return pages;
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, maxPage);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < maxPage - 1;
        pages.push(1);
            if (shouldShowLeftDots) {
                pages.push('...');
            } else if (leftSiblingIndex > 1) {
                for (let i = 2; i < leftSiblingIndex; i++) pages.push(i);
            }
            for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
                if (i !== 1 && i !== maxPage) {
                    pages.push(i);
                }
            }
            if (shouldShowRightDots) {
                pages.push('...');
            } else if (rightSiblingIndex < maxPage) {
                for (let i = rightSiblingIndex + 1; i < maxPage; i++) pages.push(i);
            }
            if (maxPage > 1) {pages.push(maxPage);}
            return pages;
        }
        useEffect(() => {
            window.scrollTo({top: 0, behavior: "smooth"});
        }, [currentPage]);
        console.log({ currentPage, maxPage });
    return (
        <div className={''}>
            <button className={'pag-button'} onClick={()=>{
                if(currentPage>1){
                    setSearchParam({page:(--currentPage).toString()})
                }}}>Prev</button>
            {getPageNumber().map((page, index) => {
                if (page === '...') {return <span key={`dots-${index}`} className="pag-dots">...</span>;}
                return (
                    <button key={page} className={`pag-button ${currentPage === page ? 'active' : ''}`}
                        onClick={() => changePage(page as number)}>{page}
                    </button>
                );
            })}
            <button className={'pag-button'} onClick={()=>{
                setSearchParam({page:(currentPage+1).toString()
                })
            }}
                    disabled={currentPage >= maxPage}>Next</button>
        </div>
    );
}
