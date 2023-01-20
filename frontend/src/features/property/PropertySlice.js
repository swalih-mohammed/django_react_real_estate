import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import propertyService from './propertyService'

const initialState = {
    properties: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get  posts
export const getProperties = createAsyncThunk(
    'property/getAll',
    async (_, thunkAPI) => {
        try {
            return await propertyService.getProperties()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get  posts
export const getSearchedProperties = createAsyncThunk(
    'property/getAll',
    async (query, thunkAPI) => {
        try {
            return await propertyService.getSearchedProperties(query)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const propertySlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            // get all posts 
            .addCase(getProperties.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProperties.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.properties = action.payload
            })
            .addCase(getProperties.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = propertySlice.actions
export default propertySlice.reducer


