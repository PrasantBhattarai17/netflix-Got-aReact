import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        search:searchReducer

    }
});
 export default appStore;