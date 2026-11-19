import { productos } from '../models/productos.model.js';

export const getProductos = (req, res) => {
    res.json(productos);
};