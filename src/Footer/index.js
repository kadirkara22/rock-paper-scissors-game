import React, { useContext } from 'react'
import { MainContext } from '../Contexts/MainContext'
import styles from "./styles.module.css"
const Footer = () => {
    const { setShow } = useContext(MainContext)

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.copyright}>
                    Copyright @2022 | Designed With by Kadir Kara</span>
                <button onClick={() => { setShow(true) }}>Rules</button>
            </div>

        </div>
    )
}

export default Footer
