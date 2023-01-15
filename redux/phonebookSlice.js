import initialContacts from './initialContacts.json';
import { createSlice } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: initialContacts,
  },
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;
