import express from 'express';
import productosRoutes from './routes/productos.route.js';

const app = express();

app.use(express.json());
app.use('/api', productosRoutes);

app.get('/', (req, res) => {
    res.send('Prueba de servidor Express');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});