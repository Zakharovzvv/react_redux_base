import React from 'react';
import RepoItem from "../repoItem/RepoItem";

const RepoList = (props) => {
    const gitRepos=props.gitRepos
    return (
        <div className="repo-list">
            {gitRepos.map(repo=>
             <RepoItem key={repo.id} repo={repo}/>
            )}
        </div>
    );
};

export default RepoList;