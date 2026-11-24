import express from "express";
import {
    getProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto,
    patchProducto
} from "../controllers/productos.controller.js";

const router = express.Router();

router.get("/productos", getProductos);
router.get("/productos/:id", getProductoById);
router.post("/productos", createProducto);
router.put("/productos/:id", updateProducto);
router.delete("/productos/:id", deleteProducto);
router.patch("/productos/:id", patchProducto);
export default router;