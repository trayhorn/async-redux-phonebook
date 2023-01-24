import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContactSuccess,
  deleteContactSuccess
} from './AppSlice';

axios.defaults.baseURL = 'https://63cfa01f109824043782d052.mockapi.io/';


export const fetchAll = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error));
  }
}

export const addContact = (contact) => async dispatch => {
  try {
    const response = await axios.post('/contacts', contact);
    console.log(response.data);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export const deleteContact = (id) => async dispatch => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

