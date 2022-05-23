import { createStore } from "redux";
import rootReducers from "./reducer/inde";

const store = createStore(rootReducers);

export default store;
