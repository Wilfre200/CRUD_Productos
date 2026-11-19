import { productos } from '../models/productos.model.js';

export const getProductos = (req, res) => {
    res.json(productos);
};

export const getProductoById = (req, res) => {
    const { id } = req.params;
    const producto = productos.find((p) => p.id === parseInt(id));

    if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(producto);
}