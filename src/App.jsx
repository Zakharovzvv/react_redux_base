import React from 'react';
import "./styles/App.sass"
import Main from "./components/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RepoCard from "./components/UI/card/RepoCard";
import Error from "./components/UI/error/Error";
import {Container} from "react-bootstrap";

//import Main from "./components/main/Main";

const App = () => {
    // const dispatch=useDispatch()
    // const count=useSelector(state=>state.repos.count)
    // function onCountClickHandler(){
    // dispatch(setCount(5))
    //   }
    return (
        <BrowserRouter>
            <Container className="container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route index element={<Main/>}/>
                    <Route path="/card/:username/:reponame" element={<RepoCard/>}/>
                    <Route path="/error" element={<Error/>}/>
                    {/*<button onClick={()=>onCountClickHandler()}>Count</button>*/}
                    {/*<div>{count}</div>*/}
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App