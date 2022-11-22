import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./modules/rootReducer";

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  




const persistConfig = {
    key: 'task-system',
    version: 1,
    storage,
};

const myPersist = persistReducer(persistConfig, rootReducer);

const myStore = configureStore({
    reducer: myPersist,
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


const myPersistStore = persistStore(myStore)

export {myStore, myPersistStore}

export type RootState = ReturnType<typeof myStore.getState>
export type AppDispatch = typeof myStore.dispatch;