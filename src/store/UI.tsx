import {createSlice} from '@reduxjs/toolkit';

const UISlice = createSlice({
  name: 'UI',
  initialState: {
    menuOpen:false
  },
  reducers: {
    openMenu:(state)=>{
        state.menuOpen=true;
    },
    closeMenu:(state)=>{
        state.menuOpen=true;
    },triggerMenu:(state)=>{
        state.menuOpen = !state.menuOpen;
    }
  },
});

export const {openMenu,closeMenu,triggerMenu} = UISlice.actions;

export default UISlice.reducer;