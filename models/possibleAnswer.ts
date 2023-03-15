import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { QuestionType } from './questionType';

interface PossibleAnswerAttributes {
  possibleAnswerId: number;
  text: string | null;
  questionType: number;
  presentationOrder: number | null;
}

interface QuestionCreationAttributes extends Optional<PossibleAnswerAttributes, 'possibleAnswerId'> {}

export class PossibleAnswer extends Model<PossibleAnswerAttributes, QuestionCreationAttributes> implements PossibleAnswerAttributes {
  public possibleAnswerId!: number;
  public text!: string | null;
  public questionType!: number;
  public presentationOrder!: number | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any): void {
    PossibleAnswer.belongsTo(models.QuestionTypes, { foreignKey: 'questionType', as: 'questionType_question_type' });
    PossibleAnswer.hasMany(models.Questions, { foreignKey: 'possibleAnswer', as: 'questions' });
  }
}

export default function initPossibleAnswer(sequelize: Sequelize): void {
  PossibleAnswer.init(
    {
      possibleAnswerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      text: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      questionType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: QuestionType,
          key: 'questionTypeId'
        }
      },
      presentationOrder: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
    sequelize,
    tableName: 'possible_answers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "possibleAnswerId" },
        ]
      },
      {
        name: "fk_PossibleAnswer_QuestionType1_idx",
        using: "BTREE",
        fields: [
          { name: "questionType" },
        ]
      },
    ]
  });
}
