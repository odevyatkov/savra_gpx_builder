import { Controller, Get, Req } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { RectangleType } from 'gpx-common';
import { AppService } from './app.service';
import { CirclePoints, RectanglePoints, VersionInfo } from './helpers';

@ApiTags('Root') @Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVersion(): VersionInfo {
    return this.appService.getVersions();
  }

  @Get('getByRectangle')
  @ApiQuery({name: 'cell', type: Number, required: false, description: 'Cell size in km (default is 1km)', example: '0.5'})
  @ApiQuery({name: 'toPoint', type: String, required: true, description: 'lat,lng of the opposite point in the rectangle', example: '50.022948,29.895159'})
  @ApiQuery({name: 'fromPoint', type: String, required: true, description: 'lat,lng of the first point in the rectangle', example: '50.050986,29.796902'})
  getByRectangle(@Req() {query}: {query: RectanglePoints}): string {
    const cellSize = query.cell ? parseFloat(query.cell) : 1;
    const rectangleExtent = this.appService.getRectangleExtent(query, cellSize);

    return this.appService.buildGpx(rectangleExtent, cellSize);
  }

  @Get('getByRadius')
  @ApiQuery({name: 'cell', type: Number, required: false, description: 'Cell size in km (default is 1km)', example: '0.5'})
  @ApiQuery({name: 'radius', type: Number, required: true, description: 'Radius in km', example: '3'})
  @ApiQuery({name: 'center', type: String, required: true, description: 'lat,lng of the central point', example: '50.050986,29.796902'})
  getByRadius(@Req() {query}: {query: CirclePoints}): string {
    const cellSize = query.cell ? parseFloat(query.cell) : 1;
    const rectangleExtent: RectangleType = this.appService.getCircleExtent(query);

    return this.appService.buildGpx(rectangleExtent, cellSize);
  }
}
