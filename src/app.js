import express from 'express';
import healthCheck from '@middlewares/health-check';

const app = express();

// Routes
app.use('/', healthCheck);

export default app;
