import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { filter: '' },
  reducers: {
    setContactFilter: (_, action) => action.payload,
  },
});

export const { setContactFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


  // const onChangeFilter = e => {
  //   setFilter(e.target.value.toLowerCase());
  // };
  
  // const getFilteredContacts = () => {
  //   return contacts.filter(
  //     contact => contact.name.toLowerCase().includes(filter)
  //   )
  // };
