"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listproducts = yield product_1.default.findAll();
    res.json(listproducts);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.json({
            msg: 'Product doesn´t exists'
        });
    }
});
exports.getProduct = getProduct;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield product_1.default.create(body);
        res.json({
            msg: 'Product added'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error adding new product'
        });
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield product_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: 'Product updated'
            });
        }
        else {
            res.status(404).json({
                msg: 'Product doesn´t exists'
            });
        }
    }
    catch (error) {
        res.json({
            msg: 'Error updating product'
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: 'Product doesn´t exists'
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: 'Product deleted'
        });
    }
});
exports.deleteProduct = deleteProduct;
