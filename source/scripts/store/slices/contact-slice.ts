import {ContactInfo} from '../../types/contact.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ContactState {
  contacts: ContactInfo[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action:PayloadAction<ContactInfo>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action:PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.name !== action.payload
      );
    },
    editContact: (state, action:PayloadAction<{ oldName: string, newContact: ContactInfo}>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.name === action.payload.oldName
      );
      if (index !== -1) {
        state.contacts[index] = action.payload.newContact
      }
    },
  }
});

export const {addContact, deleteContact, editContact} = contactSlice.actions;
export default contactSlice.reducer;
