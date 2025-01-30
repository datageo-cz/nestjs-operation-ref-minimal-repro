import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class PetstoreController {
  constructor() {}

  @Get()
  @ApiOperation(
    {
      $ref: 'https://petstore.swagger.io/v2/swagger.json#/paths/~1pet~1{petId}/get',
    } as any,
    { overrideExisting: true },
  )
  getPetFromPetstore() {
    // forward request to `https://petstore.swagger.io/v2/pet/{petId}`
  }
}
