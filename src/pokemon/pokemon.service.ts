import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { NotFoundException } from '@nestjs/common';

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

  findAll(
    type?:
      | 'Fire'
      | 'Water'
      | 'Grass'
      | 'Rock'
      | 'Ground'
      | 'Poison'
      | 'Bug'
      | 'Ghost'
      | 'Dragon'
      | 'Dark'
      | 'Steel'
      | 'Fairy'
      | 'Psychic'
      | 'Fighting'
      | 'Normal'
      | 'Flying'
      | 'Electric'
      | 'Ice'
      | 'Stellar',
  ) {
    if (type) {
      const pokemonArray = this.pokemon.filter(
        (pokemon) => pokemon.type === type,
      );
      if (pokemonArray.length === 0) {
        throw new NotFoundException('No Pokemon of that type found.');
        return pokemonArray;
      }
      return pokemonArray;
    }
  }

  findOne(id: number) {
    const pokemon = this.pokemon.find((pokemon) => pokemon.id === id);

    if (!pokemon) throw new NotFoundException(`Pokemon #${id} not found`);

    return pokemon;
  }

  create(pokemon: CreatePokemonDto) {
    const pokemonByHighestId = [...this.pokemon].sort((a, b) => {
      return b.id - a.id;
    });
    const newPokemon = {
      id: pokemonByHighestId[0].id + 1,
      ...pokemon,
    };

    this.pokemon.push(newPokemon);
    return newPokemon;
  }

  update(id: number, pokemonUpdate: UpdatePokemonDto) {
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
