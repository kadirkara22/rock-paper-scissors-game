import { createContext, useState } from "react"

export const MainContext = createContext();

const MainContextProvider = (props) => {
    const [show, setShow] = useState(false)
    const [playAgain, setPlayAgain] = useState(false)
    const [selected, setSelected] = useState([{ id: "", iconName: "" }]);


    const gameStep = [
        {
            id: 1,
            icon: "selectedPaper"
        },
        {
            id: 2,
            icon: "selectedScissors"
        },
        {
            id: 3,
            icon: "selectedRock"
        },
    ]

    const methods = {
        show,
        setShow,
        selected,
        setSelected,
        playAgain,
        setPlayAgain,
        gameStep
    }

    return (
        <MainContext.Provider value={methods}>
            {props.children}
        </MainContext.Provider>
    )

}
export default MainContextProvider;
