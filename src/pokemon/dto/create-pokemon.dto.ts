import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(
    [
      'Fire',
      'Water',
      'Grass',
      'Rock',
      'Ground',
      'Poison',
      'Bug',
      'Ghost',
      'Dragon',
      'Dark',
      'Steel',
      'Fairy',
      'Psychic',
      'Fighting',
      'Normal',
      'Flying',
      'Electric',
      'Ice',
      'Stellar',
    ],
    { message: 'Type must be a valid pokemon type' },
  )
  @IsNotEmpty()
  type:
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
    | 'Stellar';
}
