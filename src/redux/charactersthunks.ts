import { createAsyncThunk } from '@reduxjs/toolkit';
import { CharacterApiRepo } from '../services/api.characters.repo';
import { Character } from '../model/character';

export type GetCharacterPayload = {
  repo: CharacterApiRepo;
  url: string;
};

export const loadCharacterThunks = createAsyncThunk<
  Character[],
  CharacterApiRepo
>('character/load', async (repo) => {
  const character = await repo.getCharacter();
  return character;
});
