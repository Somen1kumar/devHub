import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";


const StoreObject = configureStore({
    reducer: {
        userStore: Reducer
    }
});

export default StoreObject;