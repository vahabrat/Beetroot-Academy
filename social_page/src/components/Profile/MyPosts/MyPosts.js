import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post.js'
import { addPostActionCreator,
        updateNewPostTextActionCreator}
        from '../../../redux/state.js'





const MyPosts = (props) => {

    let postsElements = props.posts.map((post) => {
        return (<Post id={post.id} message={post.message} likesCount={post.likesCount}/>
        )
    })

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {

        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator();
        props.dispatch(action);
    }

    return (<div className={s.postsBlock}>
        <h3>My Post</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button> //не візіваем функцию, а отдаем
            </div>
        </div>
        <div className={s.posts}>
            { postsElements }
        </div>
    </div>
    );
}

export default MyPosts;