'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "possible_answers", deps: []
 * createTable "questionnaires", deps: []
 * createTable "questionnaire_types", deps: []
 * createTable "questions", deps: []
 * createTable "question_types", deps: []
 * createTable "tests", deps: []
 * createTable "test_types", deps: []
 * createTable "users", deps: []
 * addIndex "fk_PossibleAnswer_QuestionType1_idx" to table "possible_answers"
 * addIndex "PRIMARY" to table "possible_answers"
 * addIndex "fk_Questionnaire_Test1_idx" to table "questionnaires"
 * addIndex "fk_Questionnaire_QuestionnaireType1_idx" to table "questionnaires"
 * addIndex "PRIMARY" to table "questionnaires"
 * addIndex "fk_QuestionnaireType_TestType_idx" to table "questionnaire_types"
 * addIndex "PRIMARY" to table "questionnaire_types"
 * addIndex "fk_Question_PossibleAnswer1_idx" to table "questions"
 * addIndex "fk_Question_Questionnaire1_idx" to table "questions"
 * addIndex "fk_Question_QuestionType1_idx" to table "questions"
 * addIndex "PRIMARY" to table "questions"
 * addIndex "fk_QuestionType_QuestionnaireType1_idx" to table "question_types"
 * addIndex "PRIMARY" to table "question_types"
 * addIndex "fk_Test_User1_idx" to table "tests"
 * addIndex "fk_Test_TestType1_idx" to table "tests"
 * addIndex "PRIMARY" to table "tests"
 * addIndex "PRIMARY" to table "test_types"
 * addIndex "PRIMARY" to table "users"
 *
 **/

var info = {
    "revision": 1,
    "name": "initial",
    "created": "2023-03-11T14:08:54.288Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "possible_answers",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "questionnaires",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "questionnaire_types",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "questions",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "question_types",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "tests",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "test_types",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "possible_answers",
            [{
                "name": "questionType"
            }],
            {
                "indexName": "fk_PossibleAnswer_QuestionType1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "possible_answers",
            [{
                "name": "possibleAnswerId"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questionnaires",
            [{
                "name": "testId"
            }],
            {
                "indexName": "fk_Questionnaire_Test1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questionnaires",
            [{
                "name": "questionnaireType"
            }],
            {
                "indexName": "fk_Questionnaire_QuestionnaireType1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questionnaires",
            [{
                "name": "questionnaireId"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questionnaire_types",
            [{
                "name": "testType"
            }],
            {
                "indexName": "fk_QuestionnaireType_TestType_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questionnaire_types",
            [{
                "name": "questionnaireTypeId"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questions",
            [{
                "name": "possibleAnswer"
            }],
            {
                "indexName": "fk_Question_PossibleAnswer1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questions",
            [{
                "name": "questionnaire"
            }],
            {
                "indexName": "fk_Question_Questionnaire1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questions",
            [{
                "name": "questionType"
            }],
            {
                "indexName": "fk_Question_QuestionType1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "questions",
            [{
                "name": "questionId"
            }, {
                "name": "possibleAnswer"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "question_types",
            [{
                "name": "questionnaireType"
            }],
            {
                "indexName": "fk_QuestionType_QuestionnaireType1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "question_types",
            [{
                "name": "questionTypeId"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "tests",
            [{
                "name": "userId"
            }],
            {
                "indexName": "fk_Test_User1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "tests",
            [{
                "name": "testTypeId"
            }],
            {
                "indexName": "fk_Test_TestType1_idx"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "tests",
            [{
                "name": "testId"
            }, {
                "name": "userId"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "test_types",
            [{
                "name": "testTypeId"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "users",
            [{
                "name": "userId"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
