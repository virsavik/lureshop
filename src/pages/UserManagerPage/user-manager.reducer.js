import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../shared/mock-user-data';

const initialState = {
  userList: [],
  loading: null,
  errorMessage: null,
  updateSuccess: null,
};

// Actions

export const getUserList = createAsyncThunk('userManager/fetch_user_list', async () => {
  const res = await userApi();
  return res;
});

// Slice

const userSlice = createSlice({
  name: 'userManager',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
    deleteUser(state, action) {
      state.userList = state.userList.filter(user => user.ID !== action.payload);
      //  state.updateSuccess = true;
    },
    addUser(state, action) {
      const newUser = action.payload;
      state.userList.push({ ...newUser, ID: state.userList.length + 1 });
      // state.updateSuccess = true;
    },
    updateUser(state, action) {
      const userData = action.payload;
      const index = state.userList.findIndex(user => user.ID === userData.ID);
      state.userList[index] = userData;
      // state.updateSuccess = true;
    },
    sortBy(state, action) {
      const key = action.payload;
      state.userList.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserList.pending, state => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.userList = action.payload;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload.errorMessage || 'Something went wrong';
      });
  },
});

export const { reset, deleteUser, addUser, updateUser, sortBy } = userSlice.actions;

export default userSlice.reducer;
