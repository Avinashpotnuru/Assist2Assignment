import "./index.css"
import React from "react";
import { BsGithub,BsFacebook,BsTwitter } from "react-icons/bs";
const Card=props=>{
    const {details}=props
    const {id,login,avatar_url}=details
    return(
        <li id="main-card">
        <div className="cover-photo"></div>
        <div className="photo">
            <img src={avatar_url} alt={`img-${id}`}/>
        </div>
        <div className="content">
            <h2 className="name">{login}</h2>
          <h3 className="fullstack">Full Stack Engineer<br />

            </h3>
        </div>
        <div className="contact">
            <ul className="social">
            <a href="" target="_blank">
                <BsFacebook/>
                </a>
               
                <a href="" target="_blank">
                <BsGithub/>
                </a>
                <a href="" target="_blank">
                <BsTwitter/>
                </a>
            </ul>
        </div>
    </li>
        
    )
}

export default Card