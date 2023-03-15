import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface QuestionAttributes {
  questionId: number;
  questionType: number;
  questionnaire: number;
  possibleAnswer: number;
}

interface QuestionCreationAttributes extends Optional<QuestionAttributes, 'questionId'> {}

export class Question extends Model<QuestionAttributes, QuestionCreationAttributes> implements QuestionAttributes {
  public questionId!: number;
  public questionType!: number;
  public questionnaire!: number;
  public possibleAnswer!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initQuestion(sequelize: Sequelize): void {
  Question.init(
    {
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      questionType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'question_types',
          key: 'questionTypeId',
        },
      },
      questionnaire: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'questionnaires',
          key: 'questionnaireId',
        },
      },
      possibleAnswer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'possible_answers',
          key: 'possibleAnswerId',
        },
      },
    },
    {
      sequelize,
      tableName: 'questions',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'questionId' }, { name: 'possibleAnswer' }],
        },
        {
          name: 'fk_Question_QuestionType1_idx',
          using: 'BTREE',
          fields: [{ name: 'questionType' }],
        },
        {
          name: 'fk_Question_Questionnaire1_idx',
          using: 'BTREE',
          fields: [{ name: 'questionnaire' }],
        },
        {
          name: 'fk_Question_PossibleAnswer1_idx',
          using: 'BTREE',
          fields: [{ name: 'possibleAnswer' }],
        },
      ],
    },
  );
}