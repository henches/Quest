"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("./question");
const questionnaire_1 = require("./questionnaire");
const questionnaireType_1 = require("./questionnaireType");
const test_1 = require("./test");
const testType_1 = require("./testType");
const users_1 = require("./users");
function initModels(sequelize) {
    (0, testType_1.initTestType)(sequelize);
    (0, test_1.initTest)(sequelize);
    (0, questionnaireType_1.initQuestionnaireType)(sequelize);
    (0, questionnaire_1.initQuestionnaire)(sequelize);
    (0, question_1.initQuestion)(sequelize);
    // initAnswer(sequelize);
    // initPredefinedAnswer(sequelize);
    (0, users_1.initUser)(sequelize);
    testType_1.TestType.hasMany(test_1.Test);
    test_1.Test.belongsTo(testType_1.TestType, { foreignKey: 'testTypeId', as: 'testType' });
    test_1.Test.hasMany(questionnaire_1.Questionnaire, { as: 'questionnaires' });
    questionnaire_1.Questionnaire.belongsTo(test_1.Test, { foreignKey: 'testId', as: 'test' });
    questionnaireType_1.QuestionnaireType.hasMany(questionnaire_1.Questionnaire, { as: 'questionnaires' });
    questionnaire_1.Questionnaire.belongsTo(questionnaireType_1.QuestionnaireType, { foreignKey: 'questionnaireTypeId', as: 'questionnaireType' });
    questionnaireType_1.QuestionnaireType.hasMany(question_1.Question, { as: 'questions' });
    question_1.Question.belongsTo(questionnaireType_1.QuestionnaireType, { foreignKey: 'questionnaireTypeId', as: 'questionnaireType' });
}
exports.default = initModels;
//# sourceMappingURL=initModels.js.map