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

    // validar SKU
    if (!sku || sku.trim() === "") {
        return res.status(400).json({ message: "El SKU es obligatorio" });
    }

    // validar nombre
    if (!nombre || nombre.trim() === "") {
        return res.status(400).json({ message: "El nombre es obligatorio" });
    }

    // validar categoria
    if (!categoria || categoria.trim() === "") {
        return res.status(400).json({ message: "La categoría es obligatoria" });
    }

    // validar precio
    if (typeof precio !== "number" || !Number.isFinite(precio) || precio <= 0) {
        return res.status(400).json({ message: "El precio es obligatorio y debe ser un número positivo" });
    }

    // validar stock
    if (!Number.isInteger(stock) || stock < 0) {
        return res.status(400).json({ message: "El stock es obligatorio y debe ser un número entero no negativo" });
    }

    // validar activo
    if (typeof activo !== "boolean") {
        return res.status(400).json({ message: "El campo 'activo' es obligatorio y debe ser un valor booleano" });
    }

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