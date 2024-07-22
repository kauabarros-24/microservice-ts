import * as express from 'express';
import * as cors from 'cors';
import { createConnection } from 'typeorm';

const app = express();

// Defina a porta
const port = 8000;

// Configure o CORS
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']
}));

app.use(express.json())

// Inicie o servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
