import {configureStore} from '@reduxjs/toolkit';
import contactSlice from './slices/contact-slice.ts';
import {storageMiddleware} from './storage-middleware.ts';

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
