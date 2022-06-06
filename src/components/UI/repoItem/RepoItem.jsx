import React from 'react';
import "./repoItem.sass"
const RepoItem = (props) => {
    const repo = props.repo
    return (
        <div className="repo-item">
            <div className="repo-item-header">
                <a href={repo.html_url}  className="repo-item-header-name">{repo.name}</a>
                <div className="repo-item-header-stars">{repo.stargazers_count}</div>
            </div>
            <div className="repo-item-last-commit">{repo.updated_at}</div>
        </div>
    );
};

export default RepoItem;