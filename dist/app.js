"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const sequelize_1 = require("sequelize");
const initModels_1 = __importDefault(require("./models/initModels"));
const question_1 = require("./models/question");
exports.app = (0, express_1.default)();
exports.sequelize = new sequelize_1.Sequelize('mysql://root:Dufour40@localhost:3306/myDb');
exports.app.use((0, morgan_1.default)('dev'));
(0, initModels_1.default)(exports.sequelize);
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
exports.app.get('/question', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("stufous ?");
    try {
        const result = yield question_1.Question.findAll({
            where: { questionnaireTypeId: 1 }
        });
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}));
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
exports.app.listen(3001, () => console.log('Server started on port 3001'));
//# sourceMappingURL=app.js.map