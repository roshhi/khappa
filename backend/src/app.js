import express from 'express';
import productsRouter from './routes/products.js';
import categoriesRouter from './routes/categories.js';
import cors from 'cors';
const app = express();

app.use(
    cors({
      origin: "https://khappa-frontend.vercel.app", // React dev server
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);

export default app;

