import {configureStore} from "@reduxjs/toolkit";
import pokemonsSlice from "./slices/pokemonsSlice";
import pokiSlice from './slices/pokemonSlice'


export const store = configureStore({
  reducer: {
    pokemonsSlice,
    pokiSlice
  }
})
