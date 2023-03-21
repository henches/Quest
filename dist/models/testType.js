"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTestType = exports.TestType = void 0;
const sequelize_1 = require("sequelize");
class TestType extends sequelize_1.Model {
}
exports.TestType = TestType;
function initTestType(sequelize) {
    TestType.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true,
        },
        organization: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(500),
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'test_types',
        timestamps: false,
    });
}
exports.initTestType = initTestType;
//# sourceMappingURL=testType.js.map