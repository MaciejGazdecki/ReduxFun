import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createPost} from "../actions/postActions";

const PostForm = (props) => {

    const initialState = {
        title:'',
        body:'',
    };
    const [state, setState] = useState(initialState);

    const onChangeHandler = (e) => {
      setState({
          ...state,
          [e.target.name]: e.target.value,
      })
    };

    const onSubmit = () => {
        props.createPost(state);
    };

    return (
        <div>
            <h1>Add Post</h1>
            <form onChange={onChangeHandler} id="form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"/>
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="body" cols="30" rows="10"></textarea>
                </div>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
};

export default connect(null, {createPost})(PostForm);

