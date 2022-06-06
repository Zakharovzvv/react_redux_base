import React from 'react';
import './main.sass'
import RepoList from "../UI/repoList/RepoList";
import Search from "../UI/search/Search";


const Main = () => {
    return (
        <div className="content">
            <Search/>
            <RepoList/>
        </div>
    );
};

export default Main;