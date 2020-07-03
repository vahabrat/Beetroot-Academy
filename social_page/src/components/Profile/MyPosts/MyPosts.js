import React from 'react'
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let posts = [

    {id:1, message:'Hi, how are you?', likesCount:11},
    {id:2, message:"Hi, it's my first post" , likesCount:11},
    {id:1, message:'blablabla', likesCount:11},
    {id:2, message:"dadadadada" , likesCount:11}



    ]

    let postsElements = posts.map((post) => {
        return (<Post id={post.id} message={post.message} likesCount={post.likesCount}/>

        )
    })

    return(
        <div className={s.postsBlock}>
            <h3>My Post<h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className="{s.posts}">
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;