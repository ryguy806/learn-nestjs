import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';

//Order matters a lot!

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
  @Get() // Get /pokemon/ OR /pokemon/type=:value
  findAll(@Query('type') type?: 'Fire' | 'Water' | 'Grass ') {
    return this.pokemonService.findAll(type);
  }

  @Get(':id') //Get /pokemon/:id
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  @Post() //POST /pokemon/
  create(@Body() pokemon: { name: string; type: 'Fire' | 'Water' | 'Grass' }) {
    return this.pokemonService.create(pokemon);
  }

  @Patch(':id') //Patch /pokemon/:id
  update(
    @Param('id') id: string,
    @Body() pokemonUpdate: { name: string; type: 'Fire' | 'Water' | 'Grass' },
  ) {
    return this.pokemonService.update(+id, pokemonUpdate);
  }

  @Delete(':id') //Delete /pokemon/:id
  delete(@Param('id') id: string) {
    return this.pokemonService.delete(+id);
  }
}