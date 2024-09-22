import { configureStore } from '@reduxjs/toolkit';
import { ThemeToggler } from './reducers/ThemeReducer';

//Создание хранилища (store)
const store = configureStore({
    reducer: ThemeToggler,
});

export default store;
