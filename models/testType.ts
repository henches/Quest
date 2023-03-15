import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface TestTypeAttributes {
  testTypeId: number;
  name: string;
  organization: string;
  description: string;
}

interface TestTypeCreationAttributes
  extends Optional<TestTypeAttributes, 'testTypeId'> {}

export class TestType
  extends Model<TestTypeAttributes, TestTypeCreationAttributes>
  implements TestTypeAttributes {
  public testTypeId!: number;
  public name!: string;
  public organization!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initTestType(sequelize: Sequelize): void {
  TestType.init(
    {
      testTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      organization: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true,
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
          fields: [{ name: 'testTypeId' }],
        }
      ],
    },
  );
}