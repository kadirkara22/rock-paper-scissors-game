import React from 'react'
import styles from "./stles.module.css"
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.text}>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>
            <div className={styles.scoreBox}>
                <span>Score</span>
                <div className={styles.score}>0</div>
            </div>
        </div>
    )
}

export default Header
