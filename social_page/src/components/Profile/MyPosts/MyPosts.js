import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post.js'


const MyPosts = (props) => {

    let postsElements = props.posts.map((post) => {
        return (<Post id={post.id} message={post.message} likesCount={post.likesCount}/>

        )
    })

    return (<div className={s.postsBlock}>
        <h3>My Post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            { postsElements }
        </div>
    </div>
    );
}

export default MyPosts;