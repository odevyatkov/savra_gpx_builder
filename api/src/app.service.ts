import { Injectable } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import { version } from 'process';
import { CirclePoints, RectanglePoints, VersionInfo } from './helpers';
import {
  RectangleType,
  minMaxPoint,
  PointPositionType,
  parsePositionFromString,
  buildExtent,
  buildGpx,
  buildGrid,
  buildNamesDict,
} from 'gpx-common';

const packageJsonFile = '../package.json';

@Injectable()
export class AppService {
  getVersions(): VersionInfo {
    let apiVersion = 'no-version';

    try {
      const content = JSON.parse(readFileSync(packageJsonFile, 'utf8'));

      apiVersion = content.version;
    } catch (error) {
      console.error(error);
      throw new Error('Unable to get version');
    }

    return {node: version, api: apiVersion};
  }

  buildGpx(rectangleExtent: RectangleType, cellSize: number): string {
    const grid = buildGrid(rectangleExtent, cellSize);
    const nameDict: Record<'numeric'|'alphabet', Record<number, string>> = buildNamesDict(grid);

    return buildGpx(rectangleExtent, grid, nameDict);
  }

  getRectangleExtent({ fromPoint, toPoint }: RectanglePoints, cellSize: number): RectangleType {
    const {minPoint, maxPoint} = minMaxPoint(fromPoint, toPoint, cellSize);

    return [minPoint[0], minPoint[1], maxPoint[0], maxPoint[1]];
  }

  getCircleExtent({center, radius}: CirclePoints): RectangleType {
    const floatRadius = parseFloat(radius);
    const centerPosition: PointPositionType = parsePositionFromString(center);

    return buildExtent(centerPosition, floatRadius);
  }
}
