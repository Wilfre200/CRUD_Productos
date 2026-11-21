import { productos } from '../models/productos.model.js';

//Get all products
export const getProductos = (req, res) => {
    res.json(productos);
};

//Get product by id
export const getProductoById = (req, res) => {
    const { id } = req.params;
    const producto = productos.find((p) => p.id === parseInt(id));

    if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(producto);
}

// Create a new product
export const createProducto = (req, res) => {

    const {
        sku,
        nombre,
        categoria,
        precio,
        stock,
        activo,
        especificaciones
    } = req.body;

    const nuevoProducto = {
        id: productos.length + 1,
        sku,
        nombre,
        categoria,
        precio,
        stock,
        activo,
        especificaciones
    };

    productos.push(nuevoProducto);

    res.status(201).json({
        mensaje: "Producto registrado correctamente",
        producto: nuevoProducto
    });
};