import React from 'react'
import styles from "./styles.module.css"
const PlayGame = () => {
    return (
        <div className={styles.playGame}>
            <img src="https://react-js-rock-paper-scissors-game.vercel.app/bg-triangle.5da1a726.svg" className={styles.playGameImage} alt=""></img>
            <div className={styles.gameItem}>
                <a className={styles.gameIcon}>

                    <div className={`${styles.paper} ${styles.icon}`}>
                    </div>
                </a>

                <a className={styles.gameIcon}>

                    <div className={`${styles.scissors} ${styles.icon}`}></div>
                </a>
                <a className={styles.gameIcon}>
                    <div className={`${styles.rock} ${styles.icon}`}></div>
                </a>
            </div>
        </div>
    )
}

export default PlayGame
