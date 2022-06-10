import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    // nav & side bar
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    // Theme 
    const [currentMode, setCurrentMode] = useState('light')
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [themeSettings, setThemeSettings] = useState(false)
    const handleClick = (e) => {
        setIsClicked({ ...initialState, [e]:true})
    }

    const setMode = (e) => {
        console.log(e);
        setCurrentMode(e.target.value)
        // store in localstorage
        localStorage.setItem('themeMode', e.target.value)
    }
    const setColor = (color) => {
        console.log(color);
        setCurrentColor(color)
        // store in localstorage
        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }

    return (
        <StateContext.Provider 
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                setMode,
                setColor,
                currentMode,
                currentColor,
                setCurrentColor,
                setCurrentMode,
                themeSettings,
                setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    );
};


export const useStateContext = () => useContext(StateContext);