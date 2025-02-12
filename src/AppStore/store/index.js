import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";

import reducers from "./reducers";
import ConnectUser from "./connect/connectUser";

const store = configureStore( {
    reducer: reducers
} );

const { dispatch } = store;
const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export {
    store,
    reducers,
    dispatch,
    useSelector,
    useDispatch,
    ConnectUser
};