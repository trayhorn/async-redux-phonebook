import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilterChange(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { onFilterChange } = filterSlice.actions;

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63cfa01f109824043782d052.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: value => ({
        url: '/contacts',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;
