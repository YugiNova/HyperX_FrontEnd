import {createSlice} from "@reduxjs/toolkit"

export interface ThemeState {
    primaryColor:string,
    primaryFont:string,
    secondaryFont:string,
    priamryBackground:string,
    secondaryBackground:string
}

const lightTheme:ThemeState = {
    primaryColor:"#e73c17",
    primaryFont:"#191919",
    secondaryFont:"#778bba",
    priamryBackground:"#ffffff",
    secondaryBackground:"#f8f8f9",
}

const darkTheme:ThemeState = {
    primaryColor:"#e73c17",
    primaryFont:"#191919",
    secondaryFont:"#778bba",
    priamryBackground:"#ffffff",
    secondaryBackground:"#f8f8f9",
}

const initialState:ThemeState = lightTheme;

export const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleDarkTheme: (state) =>{
            state = darkTheme;
        },
        toggleLightTheme: (state) => {
            state = lightTheme;
        }
    }
})

export const {toggleDarkTheme, toggleLightTheme} = themeSlice.actions
export default themeSlice