import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {link} from "../link";

const initialState = {
  pokemons: [],
  load: true
}

export const getPokemons = createAsyncThunk('pokemons', async (params) => {
    const {data} = await axios.get(link.URL, {params: params})
    return data
})

const pokemonsSlice = createSlice({
  name: 'pokemonsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.load = true
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.load = false
        state.pokemons = action.payload
      })
      .addCase(getPokemons.rejected, () => {
        alert('Error')
      })
  }
})

export default pokemonsSlice.reducer;
export const pokiSelect = state => state.pokemonsSlice;