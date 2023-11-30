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
exports.deleteCategory = exports.updateCategory = exports.addCategory = exports.getCategory = exports.getCategorys = void 0;
const category_1 = __importDefault(require("../models/category"));
const getCategorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listcategorys = yield category_1.default.findAll();
    res.json(listcategorys);
});
exports.getCategorys = getCategorys;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield category_1.default.findByPk(id);
    if (category) {
        res.json(category);
    }
    else {
        res.json({
            msg: 'Category doesn´t exists'
        });
    }
});
exports.getCategory = getCategory;
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield category_1.default.create(body);
        res.json({
            msg: 'Category added'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error adding new category'
        });
    }
});
exports.addCategory = addCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const category = yield category_1.default.findByPk(id);
        if (category) {
            yield category.update(body);
            res.json({
                msg: 'Category updated'
            });
        }
        else {
            res.status(404).json({
                msg: 'Category doesn´t exists'
            });
        }
    }
    catch (error) {
        res.json({
            msg: 'Error updating category'
        });
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield category_1.default.findByPk(id);
    if (!category) {
        res.status(404).json({
            msg: 'Category doesn´t exists'
        });
    }
    else {
        yield category.destroy();
        res.json({
            msg: 'Category deleted'
        });
    }
});
exports.deleteCategory = deleteCategory;
