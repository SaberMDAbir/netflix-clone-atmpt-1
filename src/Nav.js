import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
 
    return (
        <div className={`nav ${show && "nav__black"}`} >
            <img 
                className="nav__logo"
                src="https://i.dlpng.com/static/png/6388018_preview.png"
                alt="Netflix Logo"
            />

            <img 
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
                alt="Avatar Logo"
            />
        </div>
    )
}

export default Nav
