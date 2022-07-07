import { createSlice } from "@reduxjs/toolkit";
import { citasDefault } from "../../data/citas";

const dat = new Date()
const initialState = ({
    citas: [citasDefault],
    // date: ((date.getMonth() + 1) + '/' + date.getDate())
    date: dat.toLocaleString("es-CO", { month: "long" })  + '/' + dat.getDate()
})

const citasReducer = createSlice({
    name: 'citasAnowuta',
    initialState,
    reducers:{
        emptyCitas: (state, action) =>{
            state.citas = []
            // state.citas = state.citas.concat(cita)
        },
        addCitas: (state, action) =>{
            state.citas.push(action.payload)
            // state.citas = state.citas.concat(cita)
        }
    }
})
export const {emptyCitas, addCitas} = citasReducer.actions 
export default citasReducer.reducer