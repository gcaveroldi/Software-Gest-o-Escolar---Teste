import express from 'express';

import rotaAluno from './Rotas/rotaAluno.js';
import cors from 'cors';

const app = express();

app.use(cors({origin:"*"}));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/alunos', rotaAluno);

app.listen(3333, 'localhost', ()=>{
    console.log("Backend ouvindo em http://localhost:3333")
});