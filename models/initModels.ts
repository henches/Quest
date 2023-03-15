import { DataTypes, Sequelize } from 'sequelize';
import { PossibleAnswer } from './possibleAnswer';
import { Question } from './question';
import { Questionnaire } from './questionnaire';
import { QuestionnaireType } from './questionnaireType';
import { QuestionType } from './questionType';
import { Test } from './test';
import { TestType } from './testType';
import { User } from './users';

export function initModels(sequelize: Sequelize): {
  possible_answers: PossibleAnswer;
  question_types: QuestionType;
  questionnaire_types: QuestionnaireType;
  questionnaires: Questionnaire;
  questions: Question;
  test_types: TestType;
  tests: Test;
  users: User;
} {
  const possible_answers = PossibleAnswer.init(sequelize, DataTypes);
  const question_types = QuestionType.init(sequelize, DataTypes);
  const questionnaire_types = QuestionnaireType.init(sequelize, DataTypes);
  const questionnaires = Questionnaire.init(sequelize, DataTypes);
  const questions = Question.init(sequelize, DataTypes);
  const test_types = TestType.init(sequelize, DataTypes);
  const tests = Test.init(sequelize, DataTypes);
  const users = User.init(sequelize, DataTypes);Sapiens

  questions.belongsTo(possible_answers, { as: "possibleAnswer_possible_answer", foreignKey: "possibleAnswer"});
  possible_answers.hasMany(questions, { as: "questions", foreignKey: "possibleAnswer"});
  possible_answers.belongsTo(question_types, { as: "questionType_question_type", foreignKey: "questionType"});
  question_types.hasMany(possible_answers, { as: "possible_answers", foreignKey: "questionType"});
  questions.belongsTo(question_types, { as: "questionType_question_type", foreignKey: "questionType"});
  question_types.hasMany(questions, { as: "questions", foreignKey: "questionType"});
  question_types.belongsTo(questionnaire_types, { as: "questionnaireType_questionnaire_type", foreignKey: "questionnaireType"});
  questionnaire_types.hasMany(question_types, { as: "question_types", foreignKey: "questionnaireType"});
  questionnaires.belongsTo(questionnaire_types, { as: "questionnaireType_questionnaire_type", foreignKey: "questionnaireType"});
  questionnaire_types.hasMany(questionnaires, { as: "questionnaires", foreignKey: "questionnaireType"});
  questions.belongsTo(questionnaires, { as: "questionnaire_questionnaire", foreignKey: "questionnaire"});
  questionnaires.hasMany(questions, { as: "questions", foreignKey: "questionnaire"});
  questionnaire_types.belongsTo(test_types, { as: "testType_test_type", foreignKey: "testType"});
  test_types.hasMany(questionnaire_types, { as: "questionnaire_types", foreignKey: "testType"});
  tests.belongsTo(test_types, { as: "testType", foreignKey: "testTypeId"});
  test_types.hasMany(tests, { as: "tests", foreignKey: "testTypeId"});
  questionnaires.belongsTo(tests, { as: "test", foreignKey: "testId"});
  tests.hasMany(questionnaires, { as: "questionnaires", foreignKey: "testId"});
  tests.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(tests, { as: "tests", foreignKey: "userId"});

  return {
    possible_answers,
    question_types,
    questionnaire_types,
    questionnaires,
    questions,
    test_types,
    tests,
    users,
  };
}

export default initModels;