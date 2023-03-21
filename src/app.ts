import express, { Request, Response } from 'express';

import morgan from 'morgan';
import { Sequelize } from 'sequelize';
import initModels from './models/initModels';
import { Question } from './models/question';

export const app = express();
export const sequelize = new Sequelize('mysql://root:Dufour40@localhost:3306/myDb');
app.use(morgan('dev'));

initModels(sequelize);
// tablesEndPoints();


// app.get('/tests', async (req: Request, res: Response): Promise<void> => {
//   try {
//     const test = await Test.findOne({
//       where: { id: 2 },
//       include: [{ model: TestType, as: 'testType' }, { model: Questionnaire, as: 'questionnaires' }],
//     });
//     if (!test) { res.status(404).json({ message: `No test found for user with id ${req.params.userId}.` }); return; }

//     res.json(test);
//   } catch (err) { console.error(err); res.status(500).json({ message: 'Internal server error' }); }
// });

// app.get('/questionnaires', async (req: Request, res: Response): Promise<void> => {
//   try {
//     const questionnaire = await Questionnaire.findOne({
//       where: { id: 1 },
//       include: [{ model: QuestionnaireType, as: 'questionnaireType' }],
//     });
//     if (!questionnaire) { res.status(404).json({ message: `No test found for user with id ${req.params.userId}.` }); return; }

//     res.json(questionnaire);
//   } catch (err) { console.error(err); res.status(500).json({ message: 'Internal server error' }); }
// });

// app.get('/questionnaireTypes', async (req: Request, res: Response): Promise<void> => {
//   try {
//     const questionnaireTypes = await QuestionnaireType.findOne({
//       where: { id: 1 },
//       include: [{ model: Questionnaire, as: 'questionnaires' }, { model: Question, as: 'questions' }],
//     });
//     if (!questionnaireTypes) { res.status(404).json({ message: `No test found for user with id ${req.params.userId}.` }); return; }

//     res.json(questionnaireTypes);
//   } catch (err) { console.error(err); res.status(500).json({ message: 'Internal server error' }); }
// });


app.get('/question', async (req: Request, res: Response) => {
  console.log("stufous ?")
  try {
    const result = await Question.findAll({
      where: { questionnaireTypeId: 1 }
    });
    res.json(result);
  } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
});


// app.get('/questionnaireByUser', async (req: Request, res: Response): Promise<void> => {
//   console.log("req.query", req.query);
// try {
//   const user = await User.findOne({
//     where: { name: req.query.name },
//     include: [{ model: Questionnaire, as: 'questionnaires' }, { model: Question, as: 'questions' }],
//   });
//   if (!user) { res.status(404).json({ message: `No test found for user with name ${req.params.name}.` }); return; }

//   res.json(user);
// } catch (err) { console.error(err); res.status(500).json({ message: 'Internal server error' }); }
// });




// Lance le serveur Express
app.listen(3001, () => console.log('Server started on port 3001'));
