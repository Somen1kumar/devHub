import { createSlice } from "@reduxjs/toolkit";



const Reducer = createSlice({
    name: "userSlice",
    initialState: {
        isDarkTheme: false,
        developerData: [],
        loggedInData: {},
        currentDeveloperData: []
    },
    reducers: {
        toogleTheme: (state, action) => {
            return {
                ...state,
                isDarkTheme: action.payload
            }
        },
        addLoggedInData: (state, action) => {
            return {
                ...state,
                loggedInData: action.payload
            }
        },
        addDeveloperData: (state, action) => {
            return {
                ...state,
                developerData: action.payload

            }
        },
        addCurrentDeveloperData: (state, action) => {
            return {
                ...state,
                currentDeveloperData: action.payload
            }
        }
    }
});

export const { toogleTheme, addDeveloperData, addLoggedInData, addCurrentDeveloperData } = Reducer.actions;
export default Reducer.reducer;


