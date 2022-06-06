//const SET_COUNT = "SET_COUNT"
const SET_REPOS = "SET_REPOS"
const IS_FETCHING = "IS_FETCHING"
const CURRENT_PAGE = "CURRENT_PAGE"
const SET_FETCH_ERROR = "SET_FETCH_ERROR"



const defaultState = {
    items: [],
    isFetching: true,
//    count:0,
    totalCount:0,
    currentPage:1,
    perPage:10,
    isFetchError:false,
}


export default function repoReducer(state = defaultState, action) {
    switch (action.type) {
        // case SET_COUNT:
        //     return {...state, count: action.payload}
        case SET_REPOS:
             return {...state,
                 items: action.payload.items,
                 isFetching: false,
                 totalCount: action.payload.total_count
                }
       case IS_FETCHING:
             return {...state, isFetching: action.payload}
      case CURRENT_PAGE:
             return {...state, currentPage: action.payload}
     case SET_FETCH_ERROR:
             return {...state, isFetchError: action.payload}
        default:
            return state
    }
}

//export const setCount=(count)=>({type:SET_COUNT,payload:count})
export const setRepos=(count)=>({type:SET_REPOS,payload:count})
export const setIsFetching=(bool)=>({type:IS_FETCHING,payload:bool})
export const setCurrentPage=(page)=>({type:CURRENT_PAGE,payload:page})
export const setIsFetchError=(bool)=>({type:SET_FETCH_ERROR,payload:bool})