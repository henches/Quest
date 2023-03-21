import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface TestTypeAttributes {
  id: number;
  name: string;
  organization: string;
  description: string;
}

interface TestTypeCreationAttributes
  extends Optional<TestTypeAttributes, 'id'> { }

export class TestType extends Model<TestTypeAttributes, TestTypeCreationAttributes> implements TestTypeAttributes {
  public id!: number;
  public name!: string;
  public organization!: string;
  public description!: string;
}

export function initTestType(sequelize: Sequelize) {
  TestType.init(
    {
      id: {
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
      tableName: 'test_types',
      timestamps: false,
    },
  );
}