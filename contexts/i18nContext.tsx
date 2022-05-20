import React, { useReducer } from "react"
import { initState, i18nReducer } from "../reducers/i18nReducer"

const defaultValueType: I18nContextType = {
    localeState: initState,
    localeDispatch: () => null
}

type PropsType = {
    children: any
}

export interface I18nContextType {
    localeState: "fr" | "en",
    localeDispatch: any
}

export const I18nContext = React.createContext<I18nContextType>(defaultValueType)

const I18nProvider: React.FC<PropsType> = ({ children }) => {
    const [localeState, localeDispatch] = useReducer(i18nReducer, initState)

    return (
        <I18nContext.Provider value={{ localeState, localeDispatch }}>
            { children }
        </I18nContext.Provider>
    )
}

export default I18nProvider
