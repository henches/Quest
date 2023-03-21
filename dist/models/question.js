"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initQuestion = exports.Question = void 0;
const sequelize_1 = require("sequelize");
class Question extends sequelize_1.Model {
}
exports.Question = Question;
function initQuestion(sequelize) {
    Question.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        questionId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        text: {
            type: sequelize_1.DataTypes.STRING(500),
            allowNull: false
        },
        questionnaireTypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: 'questions',
        timestamps: false,
    });
}
exports.initQuestion = initQuestion;
//# sourceMappingURL=question.js.map