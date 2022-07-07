import { createSlice } from "@reduxjs/toolkit";
import { citasDefault } from "../../data/citas";

const dat = new Date();
let mon = ((dat.getMonth() + 1) >= 10 ? (dat.getMonth() + 1) : '0' + (dat.getMonth() + 1));
let day = (dat.getDate() >= 10 ?  dat.getDate()  : '0' + dat.getDate());
const initialState = ({
    citas: [citasDefault],
    // date: ((date.getMonth() + 1) + '/' + date.getDate())
    date: dat.getFullYear() + '/' + mon + '/' + day
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
            state.citas[0].push(action.payload)
            // state.citas = state.citas.concat(cita)
        }
    }
})
export const {emptyCitas, addCitas} = citasReducer.actions 
export default citasReducer.reducer