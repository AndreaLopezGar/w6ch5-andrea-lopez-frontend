import { Character } from '../model/character';

export class CharacterApiRepo {
  apiUrl = 'http://localhost:3000/characters/';

  async getCharacter(): Promise<Character[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
  async createCharacter(newCharacter: Partial<Character>): Promise<Character> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(newCharacter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateCharacter(
    id: Character['id'],
    updatedCharacter: Partial<Character>
  ): Promise<Character> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedCharacter),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteCharacter(id: Character['id']): Promise<Character[]> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
