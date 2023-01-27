import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phonebookApi, filterSlice } from './PhonebookSlice';


export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],
});

setupListeners(store.dispatch);


