"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initQuestionnaire = exports.Questionnaire = void 0;
const sequelize_1 = require("sequelize");
class Questionnaire extends sequelize_1.Model {
}
exports.Questionnaire = Questionnaire;
function initQuestionnaire(sequelize) {
    Questionnaire.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM('NotStarted', 'InProgress', 'Finished', 'Closed'),
            allowNull: true,
        },
        result: {
            type: sequelize_1.DataTypes.BLOB,
            allowNull: true,
        },
        questionnaireTypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        testId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'questionnaires',
        timestamps: false,
    });
}
exports.initQuestionnaire = initQuestionnaire;
//# sourceMappingURL=questionnaire.js.map