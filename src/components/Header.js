import React from "react"
import headerImage from '../images/image.png'
export default function Header(){
    return (
            <header className="header">
                <img src={headerImage} className="header-image" alt=":)" />
                <h3 className="header-title">Meme Generator</h3>
                <h4 className="header-project">React CourseProject 3</h4>
            </header>
            )
}