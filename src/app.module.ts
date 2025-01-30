import { Module } from '@nestjs/common';
import { PetstoreController } from './petstore.controller';

@Module({
  imports: [],
  controllers: [PetstoreController],
  providers: [],
})
export class AppModule {}
