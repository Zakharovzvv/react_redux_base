import React from 'react';
import "./styles/App.sass"
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "./store/reducers/repoReducer";
import Main from "./components/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
                    {/*<button onClick={()=>onCountClickHandler()}>Count</button>*/}
                    {/*<div>{count}</div>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App