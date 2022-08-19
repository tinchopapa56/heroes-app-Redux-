import { combineReducers } from "@reduxjs/toolkit";

import {herosReducer} from "./herosReducer"

const rootReducer = combineReducers({
    herosReducer,
})

export default rootReducer