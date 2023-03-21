import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Question } from './question';

interface PredefinedAnswerAttributes {
  predefinedAnswerId: number;
  text: string | null;
  questionTypeId: number;
  presentationOrder: number | null;
}

interface PredefinedAnswerCreationAttributes extends Optional<PredefinedAnswerAttributes, 'predefinedAnswerId'> { }

export class PredefinedAnswer extends Model<PredefinedAnswerAttributes, PredefinedAnswerCreationAttributes> implements PredefinedAnswerAttributes {
  public predefinedAnswerId!: number;
  public text!: string | null;
  public questionTypeId!: number;
  public presentationOrder!: number | null;
}

export function initPredefinedAnswer(sequelize: Sequelize): void {
  PredefinedAnswer.init(
    {
      predefinedAnswerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      text: {
        type: DataTypes.STRING(45),
        allowNull: true
      },

      questionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Question,
          key: 'questionTypeId'
        }
      },
      presentationOrder: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
    sequelize,
    tableName: 'predefined_answers',
    timestamps: false,
  });
}
