"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initQuestionnaireType = exports.QuestionnaireType = void 0;
const sequelize_1 = require("sequelize");
class QuestionnaireType extends sequelize_1.Model {
}
exports.QuestionnaireType = QuestionnaireType;
function initQuestionnaireType(sequelize) {
    QuestionnaireType.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        instructions: {
            type: sequelize_1.DataTypes.STRING(1000),
            allowNull: true
        },
        type: {
            type: sequelize_1.DataTypes.ENUM('a', 'b', 'c', 'd'),
            allowNull: true
        },
        testTypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'questionnaire_types',
        timestamps: false,
    });
}
exports.initQuestionnaireType = initQuestionnaireType;
//# sourceMappingURL=questionnaireType.js.map