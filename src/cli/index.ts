#!/usr/bin/env node
import * as fs from 'fs';
import { buildGrid, buildGpx, buildNamesDict, getDefaultFileName, getExtent, RowData, RectangleType } from '../utils';

const argv = require('yargs').argv;

try {
  const data: RowData = {
    center: argv.center,
    radius: parseFloat(argv.radius),
    cell: parseFloat(argv.cell),
    fromPoint: argv.fromPoint,
    toPoint: argv.toPoint,
  };
  const extent: RectangleType = getExtent(data);
  const fileName: string = `${argv.name || getDefaultFileName(data)}.gpx`;
  const grid = buildGrid(extent, data.cell);
  const nameDict: Record<'numeric'|'alphabet', Record<number, string>> = buildNamesDict(grid);
  const xml = buildGpx(extent, grid, nameDict);

  fs.writeFile(fileName, xml, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(`Look at ${fileName}`);
  });
} catch (e) {
  console.error(e);
  console.warn('use command: npm run start -- --center=lat,lng --radius=number --cell=number');
  console.warn('for use command: npm run start -- --fromPoint=lat,lng --toPoint=lat,lng --cell=number');
  process.exit(0);
}
