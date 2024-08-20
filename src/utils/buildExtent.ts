import destination from '@turf/destination';
import { PointPositionType, RectangleType } from './declarations';

export const buildExtent = (center: PointPositionType, radius: number): RectangleType => {
  const rightCenterPoint = destination({
    type: 'Point',
    coordinates: center,
  }, radius, 0).geometry.coordinates;
  const topCenterPoint = destination({
    type: 'Point',
    coordinates: center,
  }, radius, -90).geometry.coordinates;
  const latDiff = center[0] - topCenterPoint[0];
  const lngDiff = rightCenterPoint[1] - center[1];

  // [minX, minY, maxX, maxY]
  return [center[0] - latDiff, center[1] - lngDiff, center[0] + latDiff, center[1] + lngDiff];
}
