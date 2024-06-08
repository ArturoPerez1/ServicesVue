import axios from "axios";

export const getPosts = async ()=> {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/posts')
    } catch (error) {
        console.error(error)
    }
} 



