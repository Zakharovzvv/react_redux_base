import React from 'react';
import "./styles/App.sass"
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "./store/reducers/repoReducer";
import Main from "./components/main/Main";
//import Main from "./components/main/Main";

const App=()=>{
    // const dispatch=useDispatch()
    // const count=useSelector(state=>state.repos.count)
    // function onCountClickHandler(){
    // dispatch(setCount(5))
 //   }
    return(
        <div className="container">
            <Main/>
            {/*<button onClick={()=>onCountClickHandler()}>Count</button>*/}
            {/*<div>{count}</div>*/}
        </div>
    );
}

export default App