import { configureStore } from '@reduxjs/toolkit'
import propertyReducer from 'features/property/PropertySlice'


export const store = configureStore({
    reducer: {
        property: propertyReducer,

    },
})