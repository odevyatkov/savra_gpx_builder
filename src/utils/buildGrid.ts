import pointGrid from '@turf/point-grid';
import { Feature, Geometry } from '@turf/helpers/dist/js/lib/geojson';
import { Position, RectangleType } from './declarations';

export const buildGrid = (
  extent: RectangleType, cellSize: number
): Position[] => pointGrid(extent, cellSize).features.map((feature: Feature<Geometry>) => feature.geometry.coordinates);
