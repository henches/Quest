"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("./database"));
class Users extends sequelize_1.Model {
}
exports.Users = Users;
Users.init({
    Name: sequelize_1.DataTypes.STRING,
    Password: sequelize_1.DataTypes.STRING
}, {
    sequelize: database_1.default,
    modelName: 'Users',
    tableName: 'Users'
});
//# sourceMappingURL=User.js.map