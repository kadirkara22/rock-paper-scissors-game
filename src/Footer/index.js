import React from 'react'
import styles from "./styles.module.css"
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.copyright}>Copyright @2022 | Designed With by Kadir Kara</span>
                <button>Rules</button>
            </div>

        </div>
    )
}

export default Footer
