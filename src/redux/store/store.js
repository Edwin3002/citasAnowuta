import {configureStore} from '@reduxjs/toolkit'
import citasReducers from '../reducers/citasReducers'

export const store = configureStore({
    reducer: {
        citas: citasReducers
    }
})