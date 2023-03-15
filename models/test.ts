import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface TestAttributes {
  testId: number;
  testTypeId: number;
  userId: number;
}

interface TestCreationAttributes extends Optional<TestAttributes, 'testId'> {}

export class Test extends Model<TestAttributes, TestCreationAttributes>
  implements TestAttributes {
  public testId!: number;
  public testTypeId!: number;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initTest(sequelize: Sequelize): void {
  Test.init(
    {
      testId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      testTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_types',
          key: 'testTypeId',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'userId',
        },
      },
    },
    {
      sequelize,
      tableName: 'tests',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'testId' }, { name: 'userId' }],
        },
        {
          name: 'fk_Test_TestType1_idx',
          using: 'BTREE',
          fields: [{ name: 'testTypeId' }],
        },
        {
          name: 'fk_Test_User1_idx',
          using: 'BTREE',
          fields: [{ name: 'userId' }],
        },
      ],
    },
  );
}