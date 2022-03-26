import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userId: string | null;
  firstName: string | null;
  middleName: string | null;
  lastName: string | null;
  balance: number | null;
}

const initialState: UserState = {
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
    addUserInformation: (state, action: PayloadAction<UserState>) => {
      state.userId = action.payload.userId;
      state.firstName = action.payload.firstName;
      state.middleName = action.payload.middleName;
      state.lastName = action.payload.lastName;
      state.balance = action.payload.balance;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserInformation } = userSlice.actions;

export default userSlice.reducer;
