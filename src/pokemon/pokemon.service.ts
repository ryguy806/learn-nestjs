import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  private pokemon = [
    { id: 1, name: 'Bulbasaur', type: 'Grass' },
    { id: 2, name: 'Charmander', type: 'Fire' },
    { id: 3, name: 'Squirtle', type: 'Water' },
    { id: 4, name: 'Vulpix', type: 'Fire' },
    { id: 5, name: 'Staryu', type: 'Water' },
    { id: 6, name: 'Oddish', type: 'Grass' },
  ];

  findAll(role?: 'Fire' | 'Water' | 'Grass ') {
    if (role) {
      return this.pokemon.filter((pokemon) => pokemon.type === role);
    }
    return this.pokemon;
  }

  findOne(id: number) {
    return this.pokemon.find((pokemon) => pokemon.id === id);
  }

  create(pokemon: { name: string; type: 'Fire' | 'Water' | 'Grass' }) {
    const pokemonByHighestId = [...this.pokemon].sort((a, b) => {
      return (b.id = a.id);
    });
    const newPokemon = {
      id: pokemonByHighestId[0].id + 1,
      ...pokemon,
    };

    this.pokemon.push(newPokemon);
    return newPokemon;
  }

  update(
    id: number,
    pokemonUpdate: { name?: string; type?: 'Fire' | 'Water' | 'Grass' },
  ) {
    this.pokemon.map((pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, ...pokemonUpdate };
      }
    });
    return this.findOne(id);
  }

  delete(id: number) {
    this.pokemon = this.pokemon.filter((pokemon) => pokemon.id !== id);
  }
}
