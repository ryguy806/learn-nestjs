export class CreatePokemonDto {
  name: string;
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
