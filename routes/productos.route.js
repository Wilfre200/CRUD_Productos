import express from "express";
import {
    getProductos,
    getProductoById
} from "../controllers/productos.controller.js";

const router = express.Router();

router.get("/productos", getProductos);
router.get("/productos/:id", getProductoById);

export default router;