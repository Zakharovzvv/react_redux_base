import React, {useEffect, useState} from 'react';
import "./card.sass"
import {useParams, useNavigate} from "react-router-dom";
import {getContributors, getCurrentRepo} from "../../../API/gitAPI";
import ProgressIndicator from "../progressIndicator/ProgressIndicator";


const Card = (props) => {
    const {username, reponame} = useParams()
    const [loading, setLoading] = useState({loading: true})
    const [repo, setRepo] = useState({owner: {}})
    const [contributors, setContributors] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors, setLoading)
    }, [])
    return (
        <div>
            {
                loading == false
                    ?
                    <div className="card">
                        <div className="card-header flex d-flex justify-content-between">
                            <img className="img" src={repo.owner.avatar_url} alt=""/>
                            <h5 className="">{repo.name}</h5>
                            <p className="card-text"># of stars: {repo.stargazers_count}</p>
                            <a href="#" onClick={() => navigate(-1)} className="btn btn-primary">Close</a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Contributors</h5>

                            <ul className="list-group list-group-flush">
                                {contributors.map((contr, index) =>
                                    <li className="list-group-item" key={index}> {index + 1}. {contr.login} </li>
                                )}
                            </ul>
                        </div>
                    </div>
                     :
                    <ProgressIndicator/>
            }
        </div>
    );
};

export default Card;