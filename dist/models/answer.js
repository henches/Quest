"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAnswer = exports.Answer = void 0;
const sequelize_1 = require("sequelize");
const question_1 = require("./question");
const questionnaire_1 = require("./questionnaire");
class Answer extends sequelize_1.Model {
}
exports.Answer = Answer;
function initAnswer(sequelize) {
    Answer.init({
        answerId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        questionTypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: question_1.Question,
                key: 'questionId',
            },
        },
        questionnaireId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: questionnaire_1.Questionnaire,
                key: 'questionnaireId',
            },
        },
        chosenPredefinedAnswerId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //   model: PredefinedAnswer,
            //   key: 'predefinedAnswerId',
            // },
        },
    }, {
        sequelize,
        tableName: 'answers',
        timestamps: false,
    });
}
exports.initAnswer = initAnswer;
//# sourceMappingURL=answer.js.map