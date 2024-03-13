import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TeamService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createTeamDto: Prisma.PokemonCreateInput) {
    return this.databaseService.pokemon.create({ data: createTeamDto });
  }

  async findAll(
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
    if (type) return this.databaseService.pokemon.findMany({ where: { type } });
    return this.databaseService.pokemon.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.pokemon.findUnique({ where: { id } });
  }

  async update(id: number, updateTeamDto: Prisma.PokemonUpdateInput) {
    return this.databaseService.pokemon.update({
      where: { id },
      data: updateTeamDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.pokemon.delete({ where: { id } });
  }
}
