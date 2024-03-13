import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { DatabaseModule } from './database/database.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [PokemonModule, DatabaseModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
