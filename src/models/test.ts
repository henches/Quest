import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface TestAttributes {
  id: number;
  testTypeId: number
}

interface TestCreationAttributes extends Optional<TestAttributes, 'id'> { }

export class Test extends Model<TestAttributes, TestCreationAttributes> implements TestAttributes {
  public id!: number;
  public testTypeId!: number;


  toJSON() {
    return { ...this.get(), TestTypeId: undefined, testTypeId: undefined }
  }
}

export function initTest(sequelize: Sequelize): void {
  Test.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      testTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'tests',
      timestamps: false,
    },
  );
}