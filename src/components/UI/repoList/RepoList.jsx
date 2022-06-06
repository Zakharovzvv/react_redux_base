import React, {useEffect} from 'react';
import RepoItem from "../repoItem/RepoItem";
import getRepos from "../../../API/gitAPI";
import {useDispatch, useSelector} from "react-redux";
import ProgressIndicator from "../progressIndicator/ProgressIndicator";
import Pagination from "../pagination/Pagination";

const RepoList = () => {
    // const gitRepos=props.gitRepos
    const currentPage =useSelector(state=>state.repos.currentPage)
    const perPage =useSelector(state=>state.repos.perPage)
    const dispatch = useDispatch()
    const gitRepos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)

    useEffect(() => {
        dispatch(getRepos('',currentPage,perPage))
    }, [currentPage])

    return (
        <div className="repo-list">
            {
                isFetching === false
                    ?
                    gitRepos.map(repo =>
                        <RepoItem key={repo.id} repo={repo}/>)
                    :
                    <ProgressIndicator/>
            }
            <Pagination/>
        </div>

    );
};

export default RepoList;