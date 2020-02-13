import {FETCH_POSTS, NEW_POST} from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload:posts
        }))
        .catch(err => console.log(err))
};

export const createPost = (postData) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
        .then(post => dispatch({
            type: NEW_POST,
            payload:post
        }))
        .catch(err => console.log(err))
};