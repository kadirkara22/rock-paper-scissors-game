import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../Contexts/MainContext'
import styles from "./styles.module.css"
import "./playGame.css"
const SelectedIcon = () => {
    const { selected, setPlayAgain, playAgain, gameStep } = useContext(MainContext)
    const [result, setResult] = useState("")
    const [time, setTime] = useState(3)
    const [number, setNumber] = useState()

    let selectedIcon = selected[0].iconName
    const win = "win"
    const lost = "lost"
    const draw = "draw"
    let decreaseTime;
    let selectedGame = gameStep.filter(item => item.id === number);

    useEffect(() => {
        const number = Math.ceil(Math.random() * 3)
        setNumber(number)
        gameResult(number)

        if (time > 0) {
            decreaseTime = setInterval(() => {
                setTime(prev => prev - 1)

            }, 1000)

        }
        return () => clearInterval(decreaseTime);

    }, [selected, time])

    console.log(time)
    const gameResult = (number) => {
        if (Number(selected[0].id) < number) {
            if (Number(selected[0].id) === 1) {
                if (number === 3) {
                    setResult(win)
                } else {
                    setResult(lost)
                }
            }
            setResult(lost)
        } else if (Number(selected[0].id) === number) {
            setResult(draw)
        } else if (Number(selected[0].id) > number) {
            if (number === 1) {
                if (Number(selected[0].id) === 3) {
                    setResult(lost)
                } else {
                    setResult(win)
                }
            }
            setResult(win)
        }
        else {
            setResult(lost)
        }
    }
    const handlePlayAgain = () => {
        setPlayAgain(!playAgain)
    }
    return (
        <div className={styles.game}>
            <div className={styles.gameYou}>
                <span className={styles.text}>YOU PICKED</span>
                <div className={`${selectedIcon} ${styles.selectIcon}`}></div>
            </div>

            <>
                {
                    time > 0 ?
                        <div className={styles.gameHouse}>
                            <span className={styles.text}>THE HOUSE PICKED</span>
                            <div className={`${styles.counter} ${styles.selectIcon} ${styles.timeIcon}`}>
                                <span>{time}</span>
                            </div>
                        </div>

                        :
                        <div className={styles.showResult}>
                            <div className={styles.gamePlay}>
                                <span className={styles.text}>You Win</span>
                                <button onClick={handlePlayAgain}>Play Again</button>
                            </div>

                            <div className={styles.gameHouse}>
                                <span className={styles.text}>THE HOUSE PICKED</span>
                                <div className={`${styles.selectIcon} ${selectedGame[0].icon}`}>

                                </div>
                            </div>
                        </div>


                }
            </>
        </div>
    )
}

export default SelectedIcon
