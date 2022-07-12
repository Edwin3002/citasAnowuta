import { createSlice } from "@reduxjs/toolkit";
import { citasDefault } from "../../data/citas";

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
        },
        updateCitas: (state, action) =>{
            const { id, name, mail, hour, available } = action.payload;
            const citaFound = state.citas.find((cita) => cita.id === id)
            if (citaFound) {
                citaFound.name = name;
                citaFound.mail = mail;
                citaFound.hour = hour;
                citaFound.available = available;
            }
        },
        deleteCitas: (state, action) =>{
            state.citas = state.citas.filter((item) => item.id !== action.payload);
        },
    }
})
export const {emptyCitas, addCitas, addCitasDefault, updateCitas, deleteCitas} = citasReducer.actions 
export default citasReducer.reducer