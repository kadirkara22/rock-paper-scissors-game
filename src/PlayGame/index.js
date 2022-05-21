import React, { useContext } from 'react'
import { MainContext } from '../Contexts/MainContext'
import GamePage from './GamePage'
import Modal from './Modal'
import SelectedIcon from './SelectedIcon'

const PlayGame = () => {
    const { show, setShow } = useContext(MainContext)
    return (
        <>
            {/*  <GamePage /> */}
            <SelectedIcon />
            <Modal show={show} onClose={() => setShow(false)} />
        </>
    )
}

export default PlayGame
