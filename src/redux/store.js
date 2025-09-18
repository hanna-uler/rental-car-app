import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import filtersReducer from "./filters/slice";
import brandsReducer from "./brands/slice";
import carsReducer from "./cars/slice"
import favoritesReducer from "./favorites/slice"
import storage from "redux-persist/lib/storage"

const persistFavsConfig = {
    key: "favorites",
    storage
}

const persistedFavsReduser = persistReducer(persistFavsConfig, favoritesReducer)

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        brands: brandsReducer,
        cars: carsReducer,
        favorites: persistedFavsReduser,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);