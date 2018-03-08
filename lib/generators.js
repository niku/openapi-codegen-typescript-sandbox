"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = __importDefault(require("./generator"));
var Generators = /** @class */ (function () {
    function Generators(codeGeneratingUnitType, codeGeneratingConfig) {
        this.codeGeneratingUnitType = codeGeneratingUnitType;
        this.codeGeneratingConfig = codeGeneratingConfig;
    }
    Generators.prototype.generate = function (openAPI) {
        var moduleName = this.codeGeneratingConfig.config.moduleName;
        return new generator_1.default().generate({
            moduleName: moduleName,
            openAPI: openAPI
        });
    };
    return Generators;
}());
exports.default = Generators;
//# sourceMappingURL=generators.js.map