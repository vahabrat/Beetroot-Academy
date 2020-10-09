import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer.js'
import ProfileInfo from './ProfileInfo/ProfileInfo.js'


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store} />
        </div>
    )
}

export default Profile;