import { createSlice } from "@reduxjs/toolkit";

const dat = new Date();
let mon = ((dat.getMonth() + 1) >= 10 ? (dat.getMonth() + 1) : '0' + (dat.getMonth() + 1));
let day = (dat.getDate() >= 10 ?  dat.getDate()  : '0' + dat.getDate());

const initialState = ({
    citas: [],
    date: dat.getFullYear() + '/' + mon + '/' + day
})

const citasReducer = createSlice({
    name: 'citasAnowuta',
    initialState,
    reducers:{
        emptyCitas: (state) =>{
            state.citas = []
        },
        addCitas: (state, action) =>{
            state.citas.push(action.payload)
        },
        addCitasDefault: (state, action) =>{
            action.payload.forEach(element => {
                state.citas.push(element)
            });
        }
    }
})
export const {emptyCitas, addCitas, addCitasDefault} = citasReducer.actions 
export default citasReducer.reducer