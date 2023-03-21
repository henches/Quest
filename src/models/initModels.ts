import { Sequelize } from 'sequelize';
import { initQuestion, Question } from './question';
import { initQuestionnaire, Questionnaire } from './questionnaire';
import { initQuestionnaireType, QuestionnaireType } from './questionnaireType';
import { initTest, Test } from './test';
import { initTestType, TestType } from './testType';
import { initUser } from './users';

export default function initModels(sequelize: Sequelize) {
  initTestType(sequelize);
  initTest(sequelize);
  initQuestionnaireType(sequelize);
  initQuestionnaire(sequelize);
  initQuestion(sequelize);
  // initAnswer(sequelize);
  // initPredefinedAnswer(sequelize);
  initUser(sequelize);

  TestType.hasMany(Test);
  Test.belongsTo(TestType, { foreignKey: 'testTypeId', as: 'testType' });

  Test.hasMany(Questionnaire, { as: 'questionnaires' });
  Questionnaire.belongsTo(Test, { foreignKey: 'testId', as: 'test' });

  QuestionnaireType.hasMany(Questionnaire, { as: 'questionnaires' });
  Questionnaire.belongsTo(QuestionnaireType, { foreignKey: 'questionnaireTypeId', as: 'questionnaireType' });

  QuestionnaireType.hasMany(Question, { as: 'questions' });
  Question.belongsTo(QuestionnaireType, { foreignKey: 'questionnaireTypeId', as: 'questionnaireType' });

}