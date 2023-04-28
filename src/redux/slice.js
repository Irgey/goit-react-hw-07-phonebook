import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  //   [addContact.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items.push(action.payload);
  //   },
  //   [addContact.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  //   [deleteContact.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     const index = state.contacts.items.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     console.log(action.payload);
  //     console.log(index);
  //     state.contacts.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        console.log(action.payload);
        console.log(index);
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.contacts.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.contacts.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      );
  },
});
export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
