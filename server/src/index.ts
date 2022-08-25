import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { Message } from '../../shared'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors())

app.post('/api', (req: Request, res: Response) => {
    const output: Message = {
        title: 'Message from server',
        body: 'Hello from server!'
    }

    res.send(output);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});