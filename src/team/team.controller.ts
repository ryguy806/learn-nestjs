import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { Prisma } from '@prisma/client';

@Controller('Team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: Prisma.PokemonCreateInput) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll(
    @Query('type')
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
    return this.teamService.findAll(type);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeamDto: Prisma.PokemonUpdateInput,
  ) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
