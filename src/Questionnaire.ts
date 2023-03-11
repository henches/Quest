import { DataTypes, Model } from "sequelize";
import sequelize from "./database";

export class Questionnaire extends Model {
    public Name!: string;
    public Password!: string;
  }
  
  Questionnaire.init({
    Name: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User'
  });