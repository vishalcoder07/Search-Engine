import React from 'react'
import './Home.css'
import Search  from '../components/Search.js';
import {
    Link
} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';


function Home() {
    return (
        <div className="home">

            <div className="home__header">

                <div className="home__headerLeft">

                     <a target="_blank" href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
                     
                    <a target="_blank" href="https://play.google.com/store?hl=en">Store</a>

                    {/* <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link> */}
                </div>

                <div className="home__headerRight">
                    <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">Gmail</a>
                    <a target="_blank" href="https://www.google.co.in/imghp?hl=en&ogbl">Images</a>
                    {/* <Link to='/gmail'>Gmail</Link> */}
                    {/* <Link to='/images'>Images</Link> */}
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>



            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo"/>

                 <div className="home__inputContainer">
                     <Search />
                 </div>
            </div>
        </div>
    )
}

export default Home
