import pointGrid from '@turf/point-grid';
import { Feature, Geometry, Position } from '@turf/helpers/dist/js/lib/geojson';

export const buildGrid = (
  extent: [number, number, number, number], cellSide: number
): Position[] => pointGrid(extent, cellSide).features.map((feature: Feature<Geometry>) => feature.geometry.coordinates);
