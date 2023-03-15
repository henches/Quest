import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Test } from './test';

interface QuestionnaireAttributes {
  questionnaireId: number;
  status?: 'NotStarted' | 'InProgress' | 'Finished' | 'Closed';
  result?: Buffer;
  questionnaireType: number;
  testId: number;
}

interface QuestionnaireCreationAttributes extends Optional<QuestionnaireAttributes, 'questionnaireId'> {}

export class Questionnaire extends Model<QuestionnaireAttributes, QuestionnaireCreationAttributes> implements QuestionnaireAttributes {
  public questionnaireId!: number;
  public status?: 'NotStarted' | 'InProgress' | 'Finished' | 'Closed';
  public result?: Buffer;
  public questionnaireType!: number;
  public testId!: number;

  static associate(models: any) {
    this.belongsTo(models.QuestionnaireTypes, { foreignKey: 'questionnaireType', as: 'questionnaire_type' });
    this.belongsTo(models.Tests, { foreignKey: 'testId', as: 'test' });
  }
}

export default function initQuestionnaire(sequelize: Sequelize): void {
  Questionnaire.init(
    {
      questionnaireId: {
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
      questionnaireType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'questionnaire_type',
          key: 'questionnaireTypeId',
        },
      },
      testId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Test,
          key: 'testId',
        },
      },
    },
    {
      sequelize,
      tableName: 'questionnaires',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'questionnaireId' }],
        },
        {
          name: 'fk_Questionnaire_QuestionnaireType1_idx',
          using: 'BTREE',
          fields: [{ name: 'questionnaireType' }],
        },
        {
          name: 'fk_Questionnaire_Test1_idx',
          using: 'BTREE',
          fields: [{ name: 'testId' }],
        },
      ],
    }
  );
}