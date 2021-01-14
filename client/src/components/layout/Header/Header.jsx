import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/user/profile'>Profile</Link>
            <Link to='/user/profile/edit'>Edit profile</Link>
            <Link to='/resume/create'>Create Resume</Link>
            <Link to='/resume/resumes'>Resumes</Link>
        </div>
    )
}
