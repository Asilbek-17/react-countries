import {  createContext, useEffect, useState } from 'react';

export const DarckModeContext = createContext();

export function DarckModeProvider({children}) {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || "Light");

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])


	return <DarckModeContext.Provider value={{theme, setTheme}}>{children}</DarckModeContext.Provider>;
}
