import { Controller, Get, Req } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { RectanglePoints, VersionInfo } from './helpers';

@ApiTags('Root') @Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVersion(): VersionInfo {
    return this.appService.getVersions();
  }

  @Get('getByRectangle')
  @ApiQuery({name: 'cell', type: Number, required: false, description: 'Cell size in km', example: '0.5'})
  @ApiQuery({name: 'fromPoint', type: String, required: true, description: 'lat,lng of the first point in the rectangle', example: '50.050986,29.796902'})
  @ApiQuery({name: 'toPoint', type: String, required: true, description: 'lat,lng of the second point in the rectangle', example: '50.050986,29.796902'})
  getByRectangle(@Req() {query}: {query: RectanglePoints}) {
    console.log({handler: 'getByRectangle', query});

    return 'getByRectangle';
  }

  @Get('getByRadius')
  getByRadius() {
    return 'getByRadius';
  }
}
