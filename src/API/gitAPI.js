import axios from "axios"
import {setIsFetching, setRepos} from "../store/reducers/repoReducer";

const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if (searchQuery == "") {
        searchQuery = "stars:%3E1"
    }
    try {
        return async (dispatch) => {
            dispatch(setIsFetching(true))
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
            dispatch(setRepos(response.data))
        }
    } catch (e) {
        console.log(e)
    }
}

export default getRepos