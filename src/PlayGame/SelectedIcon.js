import React from 'react'
import styles from "./styles.module.css"
const SelectedIcon = () => {
    return (
        <div className={styles.game}>
            <div className={styles.gameYou}>
                <span className={styles.text}>YOU PICKED</span>
                <div className={`${styles.selectedPaper} ${styles.selectIcon}`}></div>
            </div>
            <div className={styles.gameHouse}>
                <span className={styles.text}>THE HOUSE PICKED</span>
                <div className={`${styles.selectedPaper} ${styles.selectIcon}`}></div>
            </div>
        </div>
    )
}

export default SelectedIcon
