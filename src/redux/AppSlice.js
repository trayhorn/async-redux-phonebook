import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../initialContacts.json';
import { nanoid } from 'nanoid';


export const AppSlice = createSlice({
  name: 'app',
  initialState: {
    contacts: initialContacts,
    filter: '',
  },
  reducers: {
    createContact(state, action) {
      const contact = {
        id: nanoid(),
        name: action.payload[0],
        number: action.payload[1],
      };
      state.contacts.push(contact);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    changeFilter(state, action) {
      (state.filter = action.payload);
    }
  },
});

export const { createContact, deleteContact, changeFilter } = AppSlice.actions;