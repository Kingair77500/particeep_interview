import { createSlice } from '@reduxjs/toolkit';

export const movies = createSlice({
    name: 'movies',
    initialState: {
        value: [],
    },
    reducers: {
        setMovies: (state, action) => {
            state.value = action.payload;
        },
        addLike: (state) => {

        },
        addDislike: (state) => {

        },
        deleteMovies: (state, action) => {
            state.value = action.payload.getCurrentData.filter((element: any) => element.id !== action.payload.idDeleting)
        },
    }
})

export const { setMovies, addLike, addDislike, deleteMovies} = movies.actions;
export const moviesData = (state: any) => state.movies.value
export default movies.reducer;