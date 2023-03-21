"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPredefinedAnswer = exports.PredefinedAnswer = void 0;
const sequelize_1 = require("sequelize");
const question_1 = require("./question");
class PredefinedAnswer extends sequelize_1.Model {
}
exports.PredefinedAnswer = PredefinedAnswer;
function initPredefinedAnswer(sequelize) {
    PredefinedAnswer.init({
        predefinedAnswerId: {
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
        tableName: 'predefined_answers',
        timestamps: false,
    });
}
exports.initPredefinedAnswer = initPredefinedAnswer;
//# sourceMappingURL=predefinedAnswer.js.map