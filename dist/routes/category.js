"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category");
const router = (0, express_1.Router)();
router.get('/', category_1.getCategorys);
router.get('/:id', category_1.getCategory);
router.post('/', category_1.addCategory);
router.put('/:id', category_1.updateCategory);
router.delete('/:id', category_1.deleteCategory);
exports.default = router;
