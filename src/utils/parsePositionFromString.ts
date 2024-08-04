import { PointPositionType } from './declarations';

export const parsePositionFromString = (positionString: string): PointPositionType => {
  const point = positionString.split(',');

  if (point.length !== 2) {
    throw new Error(`Invalid position coordinates format. Use "lat,lng" instead of "${positionString}"`);
  }

  return [parseFloat(point[1]), parseFloat(point[0])];
}
