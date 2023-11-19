import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Character } from '../model/character';
import { loadCharacterThunks } from './charactersthunks';

type CharacterState = {
  characters: Character[];
  charactersState: 'idle' | 'loading' | 'error';
};

const initialState: CharacterState = {
  characters: [],
  charactersState: 'idle',
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCharacterThunks.pending, (state: CharacterState) => {
      state.charactersState = 'loading';
      return state;
    });
    builder.addCase(
      loadCharacterThunks.fulfilled,
      (state: CharacterState, { payload }: PayloadAction<Character[]>) => {
        state.characters = payload;
        state.charactersState = 'idle';
        return state;
      }
    );
    builder.addCase(loadCharacterThunks.rejected, (state: CharacterState) => {
      state.charactersState = 'error';
      return state;
    });
  },
});

export default charactersSlice.reducer;
