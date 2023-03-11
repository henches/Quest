import { DataTypes, Model } from "sequelize";
import sequelize from "./database";

export class Users extends Model {
    public Name!: string;
    public Password!: string;
  }
  
  Users.init({
    Name: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users'
  });