"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleAnswer = void 0;
const sequelize_1 = require("sequelize");
const question_1 = require("./question");
class PossibleAnswer extends sequelize_1.Model {
}
exports.PossibleAnswer = PossibleAnswer;
function initPossibleAnswer(sequelize) {
    PossibleAnswer.init({
        possibleAnswerId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        text: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: true
        },
        questionTypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: question_1.Question,
                key: 'questionTypeId'
            }
        },
        presentationOrder: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'possible_answers',
        timestamps: false,
    });
}
exports.default = initPossibleAnswer;
//# sourceMappingURL=possibleAnswer.js.map