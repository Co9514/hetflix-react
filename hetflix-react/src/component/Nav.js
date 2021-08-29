import React, {useEffect, useState} from "react";
import '../css/Nav.css'


function Nav(){
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[])

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className='nav__logo'
                src="./logo.png" alt=""/>
            <img
                className="nav__avatar"
                src="https://occ-0-2794-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWEE_3qAhYLrZINhU6fkrvOi3KTn4zh43C5sISOVwNisgX-mRxJJIVpZgAoKVOjAIH9mp6IiC9NQIC1h1D484ZA.png?r=f80" alt=""/>
        </div>
    )
}

export default Nav