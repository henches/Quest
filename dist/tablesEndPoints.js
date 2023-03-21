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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tablesEndPoints = void 0;
const app_1 = require("./app");
const answer_1 = require("./models/answer");
const predefinedAnswer_1 = require("./models/predefinedAnswer");
const question_1 = require("./models/question");
const questionnaire_1 = require("./models/questionnaire");
const questionnaireType_1 = require("./models/questionnaireType");
const test_1 = require("./models/test");
const testType_1 = require("./models/testType");
const users_1 = require("./models/users");
function tablesEndPoints() {
    app_1.app.get('/testType', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield testType_1.TestType.findAll();
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }));
    app_1.app.get('/test', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield test_1.Test.findAll();
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }));
    app_1.app.get('/questionnaireType', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield questionnaireType_1.QuestionnaireType.findAll();
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }));
    app_1.app.get('/questionnaire', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield questionnaire_1.Questionnaire.findAll();
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }));
    app_1.app.get('/questions', (req, res) => __awaiter(this, void 0, void 0, function* () {
        console.log("stufous ?");
        try {
            const result = yield question_1.Question.findAll({
                where: { questionnaireTypeId: 2 }
            });
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }));
    app_1.app.get('/answer', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield answer_1.Answer.findAll();
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }));
    app_1.app.get('/predefined_answer', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield predefinedAnswer_1.PredefinedAnswer.findAll();
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }));
    app_1.app.get('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield users_1.User.findAll();
            res.json(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }));
}
exports.tablesEndPoints = tablesEndPoints;
//# sourceMappingURL=tablesEndPoints.js.map