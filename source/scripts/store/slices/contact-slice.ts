import {ContactInfo} from '../../types/contact.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ContactState {
  contacts: ContactInfo[];
}

// Загрузка данных из localStorage при старте приложения
const loadContactsFromStorage = (): ContactInfo[] => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    try {
      return JSON.parse(savedContacts);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Ошибка парсинга данных из localStorage:', error);
      throw new Error('Ошибка парсинга данных из localStorage');
    }
  }
  return [];
};

const initialState: ContactState = {
  contacts: loadContactsFromStorage(), // Загружаем контакты из localStorage
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
        state.contacts[index] = action.payload.newContact;
      }
    },
    clearAllContacts: (state) => {
      state.contacts = [];
    },
    initializeContacts: (state, action: PayloadAction<ContactInfo[]>) => {
      state.contacts = action.payload;
    },
  }
});

export const {addContact, deleteContact, editContact, clearAllContacts, initializeContacts} = contactSlice.actions;
export default contactSlice.reducer;
