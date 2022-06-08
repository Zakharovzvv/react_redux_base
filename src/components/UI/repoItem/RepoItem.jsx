import React from 'react';
//import "./repoItem.sass"
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Card, Col} from "react-bootstrap";

const RepoItem = (props) => {
    const repo = props.repo

    const navigate = useNavigate()
    return (
        <Col>
        <Card className="repo-item mb-3" >
            <Card.Header>
                <Card.Title><a href={repo.html_url} className="repo-item-header-name">{repo.name}</a></Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text className="repo-item-header-stars">Stars: {repo.stargazers_count}</Card.Text>
                <Card.Text className="repo-item-last-commit">Last updated: {repo.updated_at}</Card.Text>
                <Button onClick={() => {
                    navigate(`/card/${repo.owner.login}/${repo.name}`)
                }} variant="primary">Details</Button>
                {/*<div className="repo-item-header">*/}
                {/*    <a href={repo.html_url} className="repo-item-header-name">{repo.name}</a>*/}
                {/*    <div> className="repo-item-header-stars">Stars {repo.stargazers_count}</div>*/}
                {/*</div>*/}
                {/*<div className="repo-item-header">*/}
                {/*    <div className="repo-item-last-commit">{repo.updated_at}</div>*/}
                {/*    <NavLink to={`/card/${repo.owner.login}/${repo.name}`} className="btn btn-primary">Details</NavLink>*/}
                {/*</div>*/}
            </Card.Body>
        </Card>
        </Col>
    )
        ;
};

export default RepoItem;