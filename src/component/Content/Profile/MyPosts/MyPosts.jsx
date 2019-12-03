import React from 'react';
import Post from './Post/Posts';

const MyPosts = (props) => {

    let postElements =
        props.message.map(p => <Post message={p.message} key={p.id} cauntLikes={p.cauntLikes}/>);

    let newPostElement = React.createRef();

    let addNewPosts = () => {
        props.addPosts();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className="PostBlock">
            <div>
                <textarea rows="5" cols="45" onChange={onPostChange} ref={newPostElement} value={props.textAreaValue} placeholder='Enter you post'/>
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

export default MyPosts;