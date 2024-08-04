import { env } from 'process';
import { Cell } from 'gpx-common';

export interface VersionInfo {
  node: string;
  api: string;
}

export interface RectanglePoints extends Cell {
  fromPoint: string;
  toPoint: string;
}

export const isNullOrUndefined = (val: unknown): val is (null | undefined) => val === null || val === undefined;
export const isEmptyValue = (val: unknown): val is (undefined | null | false | '') =>
  isNullOrUndefined(val) || val === false || val === '';
export const isDevMode = () => isEmptyValue(env.PRODUCTION) || env.PRODUCTION === 'false';
