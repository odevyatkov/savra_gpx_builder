"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getVersion() {
        return this.appService.getVersions();
    }
    getByRectangle({ query }) {
        console.log({ handler: 'getByRectangle', query });
        return 'getByRectangle';
    }
    getByRadius() {
        return 'getByRadius';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getVersion", null);
__decorate([
    (0, common_1.Get)('getByRectangle'),
    (0, swagger_1.ApiQuery)({ name: 'cell', type: Number, required: false, description: 'Cell size in km', example: '0.5' }),
    (0, swagger_1.ApiQuery)({ name: 'fromPoint', type: String, required: true, description: 'lat,lng of the first point in the rectangle', example: '50.050986,29.796902' }),
    (0, swagger_1.ApiQuery)({ name: 'toPoint', type: String, required: true, description: 'lat,lng of the second point in the rectangle', example: '50.050986,29.796902' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getByRectangle", null);
__decorate([
    (0, common_1.Get)('getByRadius'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getByRadius", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('Root'),
    (0, common_1.Controller)('v1'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map