import { Cell } from 'gpx-common';
export interface VersionInfo {
    node: string;
    api: string;
}
export interface RectanglePoints extends Cell {
    fromPoint: string;
    toPoint: string;
}
export declare const isNullOrUndefined: (val: unknown) => val is (null | undefined);
export declare const isEmptyValue: (val: unknown) => val is (undefined | null | false | "");
export declare const isDevMode: () => boolean;
