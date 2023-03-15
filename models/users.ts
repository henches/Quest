import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface UserAttributes {
  userId: number;
  name: string | null;
  password: string | null;
  email: string | null;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'userId'> {}

export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public userId!: number;
  public name!: string | null;
  public password!: string | null;
  public email!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initUser(sequelize: Sequelize): void {
  User.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'userId' }],
        },
      ],
    },
  );
}