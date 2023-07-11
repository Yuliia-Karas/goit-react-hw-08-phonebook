import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { CONTACTS } from './constants';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: CONTACTS,
  initialState,
  reducers: {
    addContact(state, action) {
      const payload = action.payload;
      const randomId = nanoid();
      state.contacts.push({ name: payload.name, number: payload.number, id: randomId });
    },
    
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
