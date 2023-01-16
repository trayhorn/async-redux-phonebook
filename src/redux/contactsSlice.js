import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import initialContacts from '../initialContacts.json';


export const contactsSlice = createSlice({
  name: 'app',
  initialState: initialContacts,
  reducers: {
    createContact(state, action) {
      const contact = {
        id: nanoid(),
        name: action.payload[0],
        number: action.payload[1],
      };
      return [...state, contact];
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { createContact, deleteContact } = contactsSlice.actions;
