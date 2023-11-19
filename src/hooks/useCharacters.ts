import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../model/character';
import { loadThunk } from '../redux/playersthunks';
import { ApiCharacterRepository } from '../services/api.characters.repo';
import { AppDispatch, RootState } from '../store/store';

export function useCharacters() {
  const repo = useMemo(
    () =>
      new ApiCharacterRepository(
        'https://jesus-aa-202307-w6ch5-jesus-alvarez-back.onrender.com/players'
      ),
    []
  );

  const CharactersState = useSelector(
    (state: RootState) => state.tennisPlayers
  );
  const dispatch = useDispatch<AppDispatch>();

  const loadCharacters = useCallback(async () => {
    dispatch(loadThunk(repo));
  }, [repo, dispatch]);

  return {
    loadCharacters,
  };
}
