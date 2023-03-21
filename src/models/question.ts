import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface QuestionAttributes {
  id: number;
  questionId: number;
  text: string;
  questionnaireTypeId: number;
}

interface QuestionCreationAttributes extends Optional<QuestionAttributes, 'id'> { }

export class Question extends Model<QuestionAttributes, QuestionCreationAttributes> implements QuestionAttributes {
  public id!: number;
  public questionId!: number;
  public text!: string;
  public questionnaireTypeId!: number;
}

export function initQuestion(sequelize: Sequelize): void {
  Question.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      questionnaireTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
    sequelize,
    tableName: 'questions',
    timestamps: false,
  });

}
