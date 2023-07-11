import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { CONTACTS } from './constants';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: CONTACTS,
  initialState,
  reducers: {
    addContact(state, action) {
      console.log(state, action);

      state.contacts.push(action.payload);
    },
    // prepare(name, number) {
    //   return {
    //     patload: {
    //       id: nanoid(),
    //       name,
    //       number,
    //     },
    //   };
    // },
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
