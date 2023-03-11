import express from 'express';
import morgan from 'morgan';
import { Users } from './User';

console.log('ca farte ?');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Dufour40',
//   database: 'mydb',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Erreur de connexion à la base de données: ', err);
//   } else {
//     console.log('Connexion à la base de données établie');
//   }
// });


const app = express();

// Utilisation du middleware de journalisation
app.use(morgan('dev'));

app.get('/hello', (req, res) => {
  res.send('Bonjour, comment ça vayR ?');
});




// app.get('/test_type', (req, res) => {
//   connection.query('SELECT user.userId FROM test where userId = 2', (error, results, fields) => {
//     if (error) {
//       console.error('Erreur lors de la récupération des données de la table: ', error);
//       res.status(500).send('Erreur lors de la récupération des données de la table');
//     } else {
//       console.log('Récupération des données de la table réussie');
//       res.status(200).send(results);
//     }
//   });
// });


app.get('/test_type', async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['Name', 'Password'],
      where: {
        name: 'Francoise',
      },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Une erreur est survenue lors de la récupération des utilisateurs.');
  }
});




app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000');
});