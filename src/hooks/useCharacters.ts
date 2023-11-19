import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { useCallback, useMemo } from 'react';
import { CharacterApiRepo } from '../services/api.characters.repo';
import { loadCharacterThunks } from '../redux/charactersthunks';

export function useCharacters() {
  const dispatch = useDispatch<AppDispatch>();
  const repo = useMemo(() => new CharacterApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    try {
      dispatch(loadCharacterThunks(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [dispatch, repo]);
  return loadCharacters;
}
