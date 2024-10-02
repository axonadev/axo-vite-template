import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import storeLoginSlice from "./storeLogin";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Lista delle slice da persistere
};

const rootReducer = combineReducers({
  auth: storeLoginSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
