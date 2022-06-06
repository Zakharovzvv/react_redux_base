import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./pagination.sass"
import {setCurrentPage} from "../../../store/reducers/repoReducer";
import {createPages} from "../../../utils/pageCreator"

const Pagination = () => {
    const dispatch=useDispatch()
    const currentPage =useSelector(state=>state.repos.currentPage)
    const perPage =useSelector(state=>state.repos.perPage)
    const totalPages =useSelector(state=>state.repos.totalCount)
    const pagesCount=Math.ceil(totalPages/perPage)
    const pages=[]

    createPages(pages,pagesCount,currentPage)
    console.log(pages,pagesCount,currentPage,totalPages)
    return (
        // <div className="pagination">
        //     {
        //         pages.map((page,index)=>
        //             <span onClick={()=>dispatch(setCurrentPage(page))}
        //                 className={currentPage==page?"pagination-page-current":"pagination-page"}
        //                   key={index}>{page}</span>
        //         )
        //     }
        // </div>

    <nav aria-label="...">
        <ul className="pagination">
            {
                pages.map((page,index)=>
                    <li  onClick={()=>dispatch(setCurrentPage(page))}
                          className={currentPage==page?"page-item active":"page-item"}
                          key={index}><span className="page-link" >{page}</span></li>
                )
            }

                {/*<a className="page-link" href="#">2</a>*/}
        </ul>
    </nav>
    );
};

export default Pagination;