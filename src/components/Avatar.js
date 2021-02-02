import React from 'react'
import avatar from '../assets/avatar.jpg'

export default function Avatar({ user, showName }) {
    return (
        <div className="avatar-component">
            {/*No permissions to fetching photos from faker. Using dummy photo for all users instead*/}
            {/*<img className="avatar" src={user.avatar} alt="" />*/}
            <img className="avatar" src={avatar} alt="" />
            {showName && <h3 className="avatar-title">{user.name}</h3>}
        </div>
    )
}
