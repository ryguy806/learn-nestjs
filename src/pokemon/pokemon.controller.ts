import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

//Order matters a lot!

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
  @Get() // Get /pokemon/ OR /pokemon/type=:value
  findAll(@Query('type') type?: 'Fire' | 'Water' | 'Grass ') {
    return this.pokemonService.findAll(type);
  }

  @Get(':id') //Get /pokemon/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonService.findOne(id);
  }

  @Post() //POST /pokemon/
  create(@Body() pokemon: CreatePokemonDto) {
    return this.pokemonService.create(pokemon);
  }

  @Patch(':id') //Patch /pokemon/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() pokemonUpdate: UpdatePokemonDto,
  ) {
    return this.pokemonService.update(id, pokemonUpdate);
  }

  @Delete(':id') //Delete /pokemon/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.pokemonService.delete(id);
  }
}
