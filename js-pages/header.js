import React from "react"
import ReactDOM from "react-dom"


export default function Header() {
    return (
        <div className="headerSection">
        <img className="headImg" src="./images/photocrop.jpg"></img>
        <h1 className="headTitle">Andrew Barker</h1>
        <h3>Fullstack Developer</h3>
        <a href="https://andrewbarker-webdev.netlify.app/index.html">Portfolio</a>
        <div className="socialContainer">
        <img className="socialButtons"  href="#" src="./images/EmailButton.svg" alt="email link"></img>
        <img className="socialButtons"  href="#" src="./images/LinkedInButton.svg" alt="linkedin link"></img>
        </div>
        </div>
    )
}