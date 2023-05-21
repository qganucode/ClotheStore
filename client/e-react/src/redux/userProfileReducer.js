import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowEditModal: false,
  userData: {},
};

const profilePage = createSlice({
  name: "profile-page",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
    toggleEditModal: (state, action) => {
      state.isShowEditModal = action.payload;
    },
  },
});

export const { reset, updateUserData, toggleEditModal } = profilePage.actions;

export default profilePage.reducer;
