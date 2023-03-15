import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { TestType } from './testType';

interface QuestionnaireTypeAttributes {
  questionnaireTypeId: number;
  instructions?: string;
  type?: 'a' | 'b' | 'c' | 'd';
  testType: number;
  name?: string;
}

interface QuestionnaireTypeCreationAttributes extends Optional<QuestionnaireTypeAttributes, 'questionnaireTypeId'> {}

export class QuestionnaireType
  extends Model<QuestionnaireTypeAttributes, QuestionnaireTypeCreationAttributes>
  implements QuestionnaireTypeAttributes {
  public questionnaireTypeId!: number;
  public type!: 'a' | 'b' | 'c' | 'd';
  public testType!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
export function initQuestionnaireType(sequelize: Sequelize): void {
  QuestionnaireType.init(
    {
    questionnaireTypeId: {
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
    testType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TestType,
        key: 'testTypeId'
      }
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
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'questionnaireTypeId' }],
      },
      {
        name: 'fk_QuestionnaireType_TestType_idx',
        using: 'BTREE',
        fields: [
          { name: 'testType' }
        ]
      }
    ],
  }); 
}