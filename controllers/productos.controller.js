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

// Update a product by id
export const updateProducto = (req, res) => {
    const { id } = req.params;
    const { sku, nombre, categoria, precio, stock, activo, especificaciones } = req.body;

    const producto = productos.find((p) => p.id === parseInt(id));

    if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    producto.sku = sku || producto.sku;
    producto.nombre = nombre || producto.nombre;
    producto.categoria = categoria || producto.categoria;
    producto.precio = precio || producto.precio;
    producto.stock = stock || producto.stock;
    producto.activo = activo !== undefined ? activo : producto.activo;
    producto.especificaciones = especificaciones || producto.especificaciones;

    res.json({
        mensaje: "Producto actualizado correctamente",
        producto
    });
};

// Delete a product by id
export const deleteProducto = (req, res) => {
    const { id } = req.params;
    const index = productos.findIndex((p) => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    productos.splice(index, 1);

    res.json({ message: "Producto eliminado correctamente" });
};

// PATCH
export const patchProducto = (req, res) => {
    const id = parseInt(req.params.id);

    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" })
    }

    const datosActualizados = req.body;

    Object.assign(producto, datosActualizados);

    res.status(200).json({
        message: "Producto actualizado correctamente",
        producto

    });
}