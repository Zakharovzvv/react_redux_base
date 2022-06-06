import React, {useEffect} from 'react';
import RepoItem from "../repoItem/RepoItem";
import getRepos from "../../../API/gitAPI";
import {useDispatch, useSelector} from "react-redux";
import ProgressIndicator from "../progressIndicator/ProgressIndicator";
import Pagination from "../pagination/Pagination";
import {Redirect, useNavigate} from "react-router-dom";
import Error from "../error/Error";

const RepoList = () => {
    // const gitRepos=props.gitRepos
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const dispatch = useDispatch()
    const gitRepos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const isFetchError = useSelector(state => state.repos.isFetchError)
    const navigate=useNavigate()

    useEffect(() => {
        dispatch(getRepos('', currentPage, perPage))
    }, [currentPage])

    // if(isFetchError){
    //     return navigate("/error")
    // }
    return (
        <div className="repo-list">
            {
                isFetchError &&
                <div className="alert alert-danger" role="alert">
                    Error getting repos from Github!
                </div>
            }
            {
                isFetching === false
                    ?
                    gitRepos.map(repo =>
                        <RepoItem key={repo.id} repo={repo}/>)
                    :
                    <ProgressIndicator/>
            }
            {
                isFetching === false
                    ? <Pagination/>
                    : ""
            }
        </div>

    );
};

export default RepoList;