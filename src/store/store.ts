import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import characterReducer from '../redux/slice';

export const store = configureStore({
  reducer: {
    charactersState: characterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
