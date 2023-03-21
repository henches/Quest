import { Request, Response } from 'express';
import { app } from "./app";
import { Answer } from "./models/answer";
import { PredefinedAnswer } from "./models/predefinedAnswer";
import { Question } from "./models/question";
import { Questionnaire } from "./models/questionnaire";
import { QuestionnaireType } from "./models/questionnaireType";
import { Test } from "./models/test";
import { TestType } from "./models/testType";
import { User } from "./models/users";


export function tablesEndPoints() {

  app.get('/testType', async (req: Request, res: Response) => {
    try {
      const result = await TestType.findAll();
      res.json(result);
    } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
  });

  app.get('/test', async (req: Request, res: Response) => {
    try {
      const result = await Test.findAll();
      res.json(result);
    } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
  });

  app.get('/questionnaireType', async (req: Request, res: Response) => {
    try {
      const result = await QuestionnaireType.findAll();
      res.json(result);
    } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
  });


  app.get('/questionnaire', async (req: Request, res: Response) => {
    try {
      const result = await Questionnaire.findAll();
      res.json(result);
    } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
  });


  app.get('/questions', async (req: Request, res: Response) => {
    console.log("stufous ?")
    try {
      const result = await Question.findAll({
        where: { questionnaireTypeId: 2 }
      });
      res.json(result);
    } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
  });

  app.get('/answer', async (req: Request, res: Response) => {
    try {
      const result = await Answer.findAll();
      res.json(result);
    } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
  });


  app.get('/predefined_answer', async (req: Request, res: Response) => {
    try {
      const result = await PredefinedAnswer.findAll();
      res.json(result);
    } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
  });


  app.get('/user', async (req: Request, res: Response) => {
    try {
      const result = await User.findAll();
      res.json(result);
    } catch (error) { console.log(error); res.status(500).send('Internal server error'); }
  });

}
