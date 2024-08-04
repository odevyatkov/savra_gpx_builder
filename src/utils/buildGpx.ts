import * as fs from 'fs';
import { Position } from '@turf/helpers/dist/js/lib/geojson';
import { buildGPX, GarminBuilder } from 'gpx-builder';
import Bounds from 'gpx-builder/dist/builder/BaseBuilder/models/Bounds';
import Copyright from 'gpx-builder/dist/builder/BaseBuilder/models/Copyright';

interface Info {
  name: string;
  version: string
}

const { Point, Metadata } = GarminBuilder.MODELS;
const packageInfoName = 'package.json';

export const buildGpx = (
  extent: [number, number, number, number],
  positions: Position[],
  nameDict: Record<'numeric'|'alphabet', Record<number, string>>
): string => {
  const gpxData = new GarminBuilder();
  const points = positions.map((position: Position) => {
    return new Point(position[1], position[0], {
      name: `${nameDict.alphabet[position[1]]}${nameDict.numeric[position[0]]}`,
      time: new Date(),
    });
  });
  const getCopyright = (info: Info) => new Copyright(`${info.name} v${info.version}`, {});
  const meta = (info: Info) => new Metadata({
    copyright: getCopyright(info),
    time: new Date(),
    bounds: new Bounds(extent[1], extent[0], extent[3], extent[2]),
  });
  let packageInfo: Info;

  try {
    const content = fs.readFileSync(packageInfoName, 'utf8');

    packageInfo = JSON.parse(content);
  } catch (error) {
    console.error(error);
  }
  gpxData.setMetadata(meta(packageInfo)).setWayPoints(points);

  return buildGPX(gpxData.toObject());
}
