import { Middleware } from '@reduxjs/toolkit';
import {RootState} from './store.ts';

const LOCAL_STORAGE_KEY = 'contacts';

export const storageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState() as RootState;
  const contacts = state.contacts.contacts;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  return result;
};
