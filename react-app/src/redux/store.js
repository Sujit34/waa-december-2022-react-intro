import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./AddressReducer";


const store = configureStore({
    reducer: {
        addressReducer: addressReducer
    }
});

export default store;