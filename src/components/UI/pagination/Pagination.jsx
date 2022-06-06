import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./pagination.sass"
import {setCurrentPage} from "../../../store/reducers/repoReducer";

const Pagination = () => {
    const dispatch=useDispatch()
    const currentPage =useSelector(state=>state.repos.currentPage)
    const perPage =useSelector(state=>state.repos.perPage)
    const totalPages =useSelector(state=>state.repos.totalPages)
    const pagesCount=Math.ceil(totalPages/perPage)
    const pages=[1,2,3,4,5]
    return (
        <div className="pagination">
            {
                pages.map((page,index)=>
                    <span onClick={()=>dispatch(setCurrentPage(page))}
                        className={currentPage==page?"pagination-page-current":"pagination-page"}
                          key={index}>{page}</span>
                )
            }
        </div>
    );
};

export default Pagination;