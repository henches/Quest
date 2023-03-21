"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTest = exports.Test = void 0;
const sequelize_1 = require("sequelize");
class Test extends sequelize_1.Model {
    toJSON() {
        return Object.assign(Object.assign({}, this.get()), { TestTypeId: undefined, testTypeId: undefined });
    }
}
exports.Test = Test;
function initTest(sequelize) {
    Test.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        testTypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'tests',
        timestamps: false,
    });
}
exports.initTest = initTest;
//# sourceMappingURL=test.js.map