import React, {useState} from 'react';
import "./search.sass"
import getRepos from "../../../API/gitAPI";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../../store/reducers/repoReducer";

const Search = () => {
    const dispatch = useDispatch()
    const [searchValue,setSearchValue]=useState("")
    const currentPage =useSelector(state=>state.repos.currentPage)
    const perPage =useSelector(state=>state.repos.perPage)

    function searchClickHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos('',currentPage,perPage))
    }

    return (
        <div className="search">
            <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input"/>
            <button onClick={()=>searchClickHandler()} className="search-btn">Search</button>
        </div>
    );
};

export default Search;