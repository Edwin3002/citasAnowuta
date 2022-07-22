import { createSlice } from "@reduxjs/toolkit";

const dat = new Date();
let mon = ((dat.getMonth() + 1) >= 10 ? (dat.getMonth() + 1) : '0' + (dat.getMonth() + 1));
let day = (dat.getDate() >= 10 ? dat.getDate() : '0' + dat.getDate());

const initialState = ({
    citas: [],
    citasAgendadas: [],
    date: dat.getFullYear() + '/' + mon + '/' + day
})

const citasReducer = createSlice({
    name: 'citasAnowuta',
    initialState,
    reducers: {
        emptyCitas: (state) => {
            state.citas = []
        },
        addCitas: (state, action) => {
            state.citas.push(action.payload)
        },
        addCitasDefault: (state, action) => {
            action.payload.forEach(element => {
                state.citas.push(element)
            });
        },
        updateCitas: (state, action) => {
            const { id, name, mail, hour, taken } = action.payload;
            const citaFound = state.citas.find((cita) => cita.id === id)
            if (citaFound) {
                citaFound.name = name;
                citaFound.mail = mail;
                citaFound.hour = hour;
                citaFound.taken = taken;
            }
        },
        deleteCitas: (state, action) => {
            state.citas = state.citas.filter((item) => item.id !== action.payload);
        },
        addCitasFireBase: (state, action) => {
            state.citasAgendadas = action.payload
        },
        updateCitasFireBase: (state, action) => {
            const { id, name, mail, taken } = action.payload[0];
            const citaFound = state.citasAgendadas[action.payload[2]].dataCitas.find((cita) => cita.id === id)
            if (citaFound) {
                citaFound.name = name;
                citaFound.mail = mail;
                citaFound.taken = taken;
            }
            const citaFound2 = state.citasAgendadas[action.payload[2]].dataCitas.find((cita) => cita.id === id)
                    // updateCitasAsync(dat, idCit[1])
                    // pruebaAsync(citaFound2, action.payload[2])
        },
    }
})
export const { emptyCitas, addCitas, addCitasDefault, updateCitas, deleteCitas, addCitasFireBase, updateCitasFireBase } = citasReducer.actions
export default citasReducer.reducer