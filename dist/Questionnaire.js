"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questionnaire = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("./database"));
class Questionnaire extends sequelize_1.Model {
}
exports.Questionnaire = Questionnaire;
Questionnaire.init({
    Name: sequelize_1.DataTypes.STRING,
    Password: sequelize_1.DataTypes.STRING
}, {
    sequelize: database_1.default,
    modelName: 'User',
    tableName: 'User'
});
//# sourceMappingURL=Questionnaire.js.map