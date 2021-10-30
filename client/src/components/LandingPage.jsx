import React from "react";
import { Link } from "react-router-dom";
import bienvenido from './bienvenido.png'

export default function LandingPage() {
    return (
        <div>
            <h1>Welcome to POKEPEDIA</h1>
            <img src={bienvenido} alt='joder'/>
            <Link to='/home'>
                <button>LET'S GO!</button>
            </Link>
        </div>
    )
}

// %PUBLIC_URL%/bienvenido.png
