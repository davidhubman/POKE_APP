import React from "react";
import { Link } from "react-router-dom";
//import bienvenido from "./bienvenido.png"
import styles from "./LandingPage.module.css"

export default function LandingPage() {
    return (
        <div className={ styles.background}>
            <Link to='/home'>
                <button className={styles.buttonLanding}>TRY IT NOW!</button>
            </Link>
        </div>
    )
}

// %PUBLIC_URL%/bienvenido.png
