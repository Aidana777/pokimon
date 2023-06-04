import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {link} from "../link";

const initialState = {
  poki: {},
  load: true
}

export const getPoki = createAsyncThunk('poki', async (id) => {
  const {data} = await axios.get(link.URL+id)
  return data
})

const pokiSlice = createSlice({
  name: 'pokiSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPoki.pending, (state) => {
        state.load = true
      })
      .addCase(getPoki.fulfilled, (state, action) => {
        state.load = false
        state.poki = action.payload
      })
  }
})

export default pokiSlice.reducer;

export const pokSelect = state => state.pokiSlice;


