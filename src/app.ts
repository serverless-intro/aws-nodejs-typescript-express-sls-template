import express from 'express';
import {NextFunction, Request, Response} from 'express-serve-static-core';

const app = express();
// Enable JSON use
app.use(express.json());
// Handle 'preflight' requests (CORS)
app.options('*', (req: Request, res: Response) => {
    res.status(200).send();
});

app.get('/hello', function (req, res) {
    res.send('Hello World');
});

app.post('/hello', function (req, res) {
    res.send({message: 'Hello World'});
});

// Global error handler. It must have exactly this signature, thus ignoring ESLint here
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).send('Internal Serverless Error: ' + err);
});

export = app;
