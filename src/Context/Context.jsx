import { createContext, useContext, useState, } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)



let GlobalStates = (children) => {
    const [productCounting, setProductCounting] = useState("")

    return <GlobalContext.Provider value={{
        productCounting,
        setProductCounting
    }}>
        {children.children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}