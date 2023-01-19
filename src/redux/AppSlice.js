import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import initialContacts from '../initialContacts.json';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


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

      const isDuplicate = state.contacts.some(
        prevContact =>
          prevContact.name === contact.name ||
          prevContact.number === contact.number,
      );

      if (isDuplicate) {
        Notify.failure('The contact already exists');
      } else {
        state.contacts.push(contact);
      }
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