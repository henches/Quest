import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mydb', 'root', 'RienABattre65#', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
