import { configureStore } from '@reduxjs/toolkit'
import fileReducer from '../reducers/fileReducer';
import audioReducer from '../reducers/audioReducer';


const store = configureStore({
    reducer: {
        files: fileReducer,
        audios: audioReducer
    }
})

export default store;