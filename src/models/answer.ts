import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { PredefinedAnswer } from './predefinedAnswer';
import { Question } from './question';
import { Questionnaire } from './questionnaire';

interface AnswerAttributes {
  answerId: number;
  questionTypeId: number;
  questionnaireId: number;
  chosenPredefinedAnswerId: number;
}

interface AnswerCreationAttributes extends Optional<AnswerAttributes, 'answerId'> { }

export class Answer extends Model<AnswerAttributes, AnswerCreationAttributes> implements AnswerAttributes {
  public answerId!: number;
  public questionTypeId!: number;
  public questionnaireId!: number;
  public chosenPredefinedAnswerId!: number;
}

export function initAnswer(sequelize: Sequelize): void {
  Answer.init(
    {
      answerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      questionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Question,
          key: 'questionId',
        },
      },
      questionnaireId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Questionnaire,
          key: 'questionnaireId',
        },
      },
      chosenPredefinedAnswerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: PredefinedAnswer,
        //   key: 'predefinedAnswerId',
        // },
      },
    },
    {
      sequelize,
      tableName: 'answers',
      timestamps: false,
    },
  );
}