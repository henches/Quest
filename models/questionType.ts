import { DataTypes, Model, Sequelize } from 'sequelize';
import { QuestionnaireType } from './questionnaireType';

interface QuestionnaireTypeAttributes {
  questionnaireTypeId: number;
  instructions?: string;
  type?: 'a' | 'b' | 'c' | 'd';
  testType: number;
  name?: string;
}

export class QuestionType extends Model {
  public questionTypeId!: number;
  public text!: string | null;
  public questionnaireType!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize): typeof QuestionType {
    QuestionType.init({
      questionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      text: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      questionnaireType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: QuestionnaireType,
          key: 'questionnaireTypeId'
        }
      }
    }, {
      sequelize,
      tableName: 'question_types',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "questionTypeId" },
          ]
        },
        {
          name: "fk_QuestionType_QuestionnaireType1_idx",
          using: "BTREE",
          fields: [
            { name: "questionnaireType" },
          ]
        },
      ]
    });

    return QuestionType;
  }

  public static associate(models: any): void {
    QuestionType.hasMany(models.PossibleAnswers, { foreignKey: 'questionType', as: 'possible_answers' });
    QuestionType.hasMany(models.Questions, { foreignKey: 'questionType', as: 'questions' });
    QuestionType.belongsTo(models.QuestionnaireTypes, { foreignKey: 'questionnaireType', as: 'questionnaireType_questionnaire_type' });
  }
}

export default QuestionType;