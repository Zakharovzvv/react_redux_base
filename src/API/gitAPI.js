import axios from "axios"
import {setIsFetchError, setIsFetching, setRepos} from "../store/reducers/repoReducer";

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if (searchQuery == "") {
        searchQuery = "stars:%3E1"
    }
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
            dispatch(setRepos(response.data))
        } catch (e) {
            dispatch(setIsFetchError(true))
            dispatch(setIsFetching(false))
            setTimeout(()=>{
                dispatch(setIsFetchError(false))
            },"2000")
            console.log(e)
        }
    }
}

export const getCurrentRepo = async (userName, repoName, setRepo) => {
    try {
        const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
        setRepo(response.data)
    } catch (e) {

    }
}

export const getContributors = async (userName, repoName, setContributors, setLoading) => {
    try {
        const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`)

//   setTimeout(()=>{
        setContributors(response.data)
        setLoading(false)
        //   },"1000")
    } catch (e) {
        console.log(e)
    }
}


export default getRepos