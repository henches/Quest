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
const morgan_1 = __importDefault(require("morgan"));
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
const app = (0, express_1.default)();
// Utilisation du middleware de journalisation
app.use((0, morgan_1.default)('dev'));
app.get('/hello', (req, res) => {
    res.send('Bonjour, comment ça vayR ?');
});
app.get('/test_type', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _users = yield users.findAll({
            attributes: ['Name', 'Password'],
            where: {
                name: 'Francoise',
            },
        });
        res.json(_users);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Une erreur est survenue lors de la récupération des utilisateurs.');
    }
}));
app.listen(3000, () => {
    console.log('Le serveur est en écoute sur le port 3000');
});
//# sourceMappingURL=app.js.map