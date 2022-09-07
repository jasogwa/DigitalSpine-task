import { Router } from "express";
import  AuthController  from "../controller/auth.controller";
import ProductController from "../controller/product.controller";

const router = Router();
const auth = new AuthController();
const product = new ProductController();

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/product/:id', product.productById);
router.get('/products',product.getAllProducts);

export default router;