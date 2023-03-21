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
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const initModels_js_1 = __importDefault(require("../models/initModels.js")); // Importe la fonction initModels
const possibleAnswer_js_1 = require("../models/possibleAnswer.js");
const question_js_1 = require("../models/question.js");
const questionnaire_js_1 = require("../models/questionnaire.js");
const questionnaireType_js_1 = require("../models/questionnaireType.js");
const questionType_js_1 = require("../models/questionType.js");
const test_js_1 = require("../models/test.js");
const testType_js_1 = require("../models/testType.js");
const users_js_1 = require("../models/users.js");
const app = (0, express_1.default)();
const sequelize = new sequelize_1.Sequelize('mysql://root:Dufour40@localhost:3306/myDb');
(0, initModels_js_1.default)(sequelize);
app.get('/testType', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield testType_js_1.TestType.findAll();
        res.json(result);
    }
    catch (error) {
        res.status(500).send('Internal server error');
    }
}));
app.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield test_js_1.Test.findAll();
        res.json(result);
    }
    catch (error) {
        res.status(500).send('Internal server error');
    }
}));
app.get('/questionnaireType', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield questionnaireType_js_1.QuestionnaireType.findAll();
        res.json(result);
    }
    catch (error) {
        res.status(500).send('Internal server error');
    }
}));
app.get('/questionnaire', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield questionnaire_js_1.Questionnaire.findAll();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}));
app.get('/questionType', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield questionType_js_1.QuestionType.findAll();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}));
app.get('/question', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield question_js_1.Question.findAll();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}));
app.get('/possible_answer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield possibleAnswer_js_1.PossibleAnswer.findAll();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}));
app.get('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_js_1.User.findAll();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal server error');
    }
}));
// Lance le serveur Express
app.listen(3000, () => console.log('Server started on port 3000'));
//# sourceMappingURL=app.js.map