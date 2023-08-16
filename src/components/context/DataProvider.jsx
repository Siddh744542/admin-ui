import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children})=>{
    const [members, setMembers] = useState([]);
    return(
        <DataContext.Provider value={{
            members,
            setMembers,
        }}> 
        {children}
        </DataContext.Provider>
    )
}

export default DataProvider;