import { createSlice } from '@reduxjs/toolkit';


export const AppSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    fetchingInProgress(state) {
      state.contacts.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    },
    fetchingError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    addContactSuccess(state, action) {
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    deleteContactSuccess(state, action) {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id,
      );
    }
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContactSuccess,
  deleteContactSuccess
} = AppSlice.actions;
