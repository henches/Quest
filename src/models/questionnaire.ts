import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface QuestionnaireAttributes {
  id: number;
  status?: 'NotStarted' | 'InProgress' | 'Finished' | 'Closed';
  result?: Buffer;
  questionnaireTypeId: number;
  testId: number;
}

interface QuestionnaireCreationAttributes extends Optional<QuestionnaireAttributes, 'id'> { }

export class Questionnaire extends Model<QuestionnaireAttributes, QuestionnaireCreationAttributes> implements QuestionnaireAttributes {
  public id!: number;
  public status?: 'NotStarted' | 'InProgress' | 'Finished' | 'Closed';
  public result?: Buffer;
  public questionnaireTypeId!: number;
  public testId!: number;
}

export function initQuestionnaire(sequelize: Sequelize): void {
  Questionnaire.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: DataTypes.ENUM('NotStarted', 'InProgress', 'Finished', 'Closed'),
        allowNull: true,
      },
      result: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      questionnaireTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      testId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'questionnaires',
      timestamps: false,
    }
  );
}