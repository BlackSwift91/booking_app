import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserState } from '../interfaces/IUserState';

const initialState: IUserState = {
  userId: null,
  firstName: null,
  middleName: null,
  lastName: null,
  balance: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInformation: (state, action: PayloadAction<IUserState>) => {
      state.userId = action.payload.userId;
      state.firstName = action.payload.firstName;
      state.middleName = action.payload.middleName;
      state.lastName = action.payload.lastName;
      state.balance = action.payload.balance;
    },
  },
});

export const { addUserInformation } = userSlice.actions;

export default userSlice.reducer;
