import { createSlice } from "@reduxjs/toolkit";
import { contactsInitial } from 'data/contactsInitial';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    list: contactsInitial,
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,

    reducers: {
        addNewContact: {
            reducer: (state, action) => {
                state.list.push(action.payload);
            },

            prepare: ({ id, name, number }) => {
                return {
                    payload: {
                        id,
                        name,
                        number,
                    },
                };
            },
    //     addNewContact(state, action) {
    //         const searchContact = state.contacts.find(
    //             contact => contact.name.toLowerCase().trim() === action.payload.name.toLowerCase()
    //         );
    //         if (searchContact) {
    //             return alert(`${searchContact.name} is already in contacts.`);
    //         };
        },

        deleteContact(state, action) {
            state.list = state.list.filter(
                contact => contact.id !== action.payload
            );
        },
    },
});


const persistConfig = {
  key: 'contacts',
  storage,
//   whitelist: ['contacts'],
};
    
     
export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
    persistConfig,
    deleteContact
);
       
         
           
    
            
      
        

   
 




  

