import {createContext, useState} from "react";

export const mLangContext = createContext()

export default function mLangProvider({children}) {
    const [uz, setUz] = useState([])
    const [eng, setEng] = useState([])
    const [ru, setRu] = useState([])
    return <mLangContext.Provider value={{uz,ru, eng, setUz,setEng,setRu  }}>{children}</mLangContext.Provider>
}