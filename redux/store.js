import { configureStore } from '@reduxjs/toolkit';
import phonebookSlice from './phonebookSlice';
export default configureStore({
  reducer: {
    phonebook: phonebookSlice,
  },
});

