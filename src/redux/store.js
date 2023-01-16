import { configureStore } from '@reduxjs/toolkit';
import { AppSlice } from './AppSlice';


export default configureStore({
  reducer: {
    app: AppSlice.reducer,
  },
});


