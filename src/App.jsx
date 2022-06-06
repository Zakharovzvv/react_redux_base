import React from 'react';
import "./styles/App.sass"
import Main from "./components/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Card from "./components/UI/card/Card";
import Error from "./components/UI/error/Error";

//import Main from "./components/main/Main";

const App = () => {
    // const dispatch=useDispatch()
    // const count=useSelector(state=>state.repos.count)
    // function onCountClickHandler(){
    // dispatch(setCount(5))
    //   }
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route index element={<Main/>}/>
                    <Route path="/card/:username/:reponame" element={<Card/>}/>
                    <Route path="/error" element={<Error/>}/>
                    {/*<button onClick={()=>onCountClickHandler()}>Count</button>*/}
                    {/*<div>{count}</div>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App