import express, { Request, Response } from 'express';
import { Sequelize, Op } from 'sequelize';
import models from '../models'; // Importe les modèles Sequelize
import initModels from '../models/initModels.js'; // Importe la fonction initModels

const app = express();

// Initialise la connexion à la base de données Sequelize
const sequelize = new Sequelize('mysql://username:password@localhost:3306/database_name');

// Initialise les modèles Sequelize en utilisant la fonction initModels
const { tests } = initModels(sequelize);

// Définit un endpoint pour récupérer la liste des tests
app.get('/tests', async (req: Request, res: Response) => {
  try {
    // Récupère la liste des tests en utilisant le modèle Sequelize 'tests'
    const result = await tests.findAll({
      include: [
        { model: models.test_types, as: 'testType' },
        { model: models.users, as: 'user' },
        { model: models.questionnaires, as: 'questionnaires' },
      ],
    });
    // Renvoie la liste des tests au format JSON
    res.json(result);
  } catch (error) {
    // Gère les erreurs et renvoie une réponse HTTP 500
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

// Lance le serveur Express
app.listen(3000, () => console.log('Server started on port 3000'));
