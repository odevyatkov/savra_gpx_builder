import { Injectable } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import { version } from 'process';
import { VersionInfo } from './helpers';

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

  getRectangleExtent() {}
}
