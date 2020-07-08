import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.js'
import ProfileInfo from './ProfileInfo/ProfileInfo.js'


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;