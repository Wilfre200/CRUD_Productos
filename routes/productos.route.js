import express from "express";
import {
    getProductos,
    getProductoById,
    createProducto
} from "../controllers/productos.controller.js";

const router = express.Router();

router.get("/productos", getProductos);
router.get("/productos/:id", getProductoById);
router.post("/productos", createProducto);
export default router;