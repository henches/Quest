"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initQuestionType = exports.QuestionType = void 0;
const sequelize_1 = require("sequelize");
const questionnaireType_1 = require("./questionnaireType");
class QuestionType extends sequelize_1.Model {
}
exports.QuestionType = QuestionType;
function initQuestionType(sequelize) {
    QuestionType.init({
        questionTypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        text: {
            type: sequelize_1.DataTypes.STRING(500),
            allowNull: true
        },
        questionnaireTypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: questionnaireType_1.QuestionnaireType,
                key: 'questionnaireTypeId'
            }
        }
    }, {
        sequelize,
        tableName: 'question_types',
        timestamps: false,
    });
}
exports.initQuestionType = initQuestionType;
//# sourceMappingURL=questionType.js.map