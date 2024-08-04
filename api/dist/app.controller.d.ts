import { AppService } from './app.service';
import { RectanglePoints, VersionInfo } from './helpers';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getVersion(): VersionInfo;
    getByRectangle({ query }: {
        query: RectanglePoints;
    }): string;
    getByRadius(): string;
}
