import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { TestType } from './testType';

interface QuestionnaireTypeAttributes {
  id: number;
  instructions?: string;
  type?: 'a' | 'b' | 'c' | 'd';
  testTypeId: number;
  name?: string;
}

interface QuestionnaireTypeCreationAttributes extends Optional<QuestionnaireTypeAttributes, 'id'> { }

export class QuestionnaireType extends Model<QuestionnaireTypeAttributes, QuestionnaireTypeCreationAttributes> implements QuestionnaireTypeAttributes {
  public id!: number;
  public instructions!: string;
  public type!: 'a' | 'b' | 'c' | 'd';
  public testTypeId!: number;
  public name!: string;
}

export function initQuestionnaireType(sequelize: Sequelize): void {
  QuestionnaireType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      instructions: {
        type: DataTypes.STRING(1000),
        allowNull: true
      },
      type: {
        type: DataTypes.ENUM('a', 'b', 'c', 'd'),
        allowNull: true
      },
      testTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
    },
    {
      sequelize,
      tableName: 'questionnaire_types',
      timestamps: false,
    });
}