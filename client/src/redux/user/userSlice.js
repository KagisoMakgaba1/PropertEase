<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
=======
import {createSlice} from "@reduxjs/toolkit";
import {deleteUser} from "../../../../api/controllers/user.controller";
>>>>>>> b2c97464cd7f4725cbeeb8bd8dec7d0c11965929

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
<<<<<<< HEAD
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
} = userSlice.actions;
=======
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, updateUserFailure, updateUserStart, updateUserSuccess, deleteUserStart, deleteUserFailure, deleteUserSuccess, signOutUserFailure, signOutUserSuccess, signOutUserStart } = userSlice.actions;
>>>>>>> b2c97464cd7f4725cbeeb8bd8dec7d0c11965929

export default userSlice.reducer;
