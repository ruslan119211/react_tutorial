import React from 'react';
import Post from './Post/Posts';
import {addNewPostActionCreator, onPostChangeActionCreate} from "../../../../redux/profile-reducer";

const Myposts = (props) => {

    let postElements = props.message.map(p => <Post message={p.message} cauntLikes={p.cauntLikes}/>);

    let newPostElement = React.createRef();

    let addNewPosts = () => {
        props.dispatch(addNewPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onPostChangeActionCreate(text);
        props.dispatch(action);
    };

    return (
        <div className="PostBlock">
            <div>
                <textarea rows="5" cols="45" onChange={onPostChange} ref={newPostElement} value={props.textAreaValue}/>
            </div>
            <div>
                <button onClick={addNewPosts}>Add post</button>
            </div>
            <div className="MyPosts">
                {postElements}
            </div>
        </div>
    );
};

export default Myposts;