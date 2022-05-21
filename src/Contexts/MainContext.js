import { createContext, useState } from "react"

export const MainContext = createContext();

const MainContextProvider = (props) => {
    const [show, setShow] = useState(false)


    const methods = {
        show,
        setShow
    }

    return (
        <MainContext.Provider value={methods}>
            {props.children}
        </MainContext.Provider>
    )

}
export default MainContextProvider;
