import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const [showSearch,setShowSearch] = useState(false)
    const [search, setSearch] = useState("");
    const value = {
        showSearch,
        setShowSearch,
        search,
        setSearch,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider