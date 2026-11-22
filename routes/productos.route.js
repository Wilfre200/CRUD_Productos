import express from "express";
import {
    getProductos,
    getProductoById,
    createProducto,
    updateProducto
} from "../controllers/productos.controller.js";

const router = express.Router();

router.get("/productos", getProductos);
router.get("/productos/:id", getProductoById);
router.post("/productos", createProducto);
router.put("/productos/:id", updateProducto);
export default router;