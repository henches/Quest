"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUser = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function initUser(sequelize) {
    User.init({
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'users',
        timestamps: false,
    });
}
exports.initUser = initUser;
//# sourceMappingURL=users.js.map