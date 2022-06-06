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
        dispatch(getRepos(searchValue,currentPage,perPage))
    }

    return (
        // <div className="search">
        //     <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input"/>
        //     <button onClick={()=>searchClickHandler()} className="search-btn">Search</button>
        // </div>
    <div className="input-group mb-3 mt-2">
        <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}  type="text" className="form-control" placeholder="Input repo name" aria-label="Recipient's username"
               aria-describedby="button-addon2"/>
            <button onClick={()=>searchClickHandler()} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
    );
};

export default Search;