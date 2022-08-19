import { applyMiddleware, createStore } from "redux"
import thunk from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"

import rootReducer from "./reducers/rootReducers"

export const store = createStore(
    rootReducer,
    composeWithDevTools( applyMiddleware(thunk) )
)