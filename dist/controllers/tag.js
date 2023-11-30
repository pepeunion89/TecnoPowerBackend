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
exports.deleteTag = exports.updateTag = exports.addTag = exports.getTag = exports.getTags = void 0;
const tags_1 = __importDefault(require("../models/tags"));
const getTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listtags = yield tags_1.default.findAll();
    res.json(listtags);
});
exports.getTags = getTags;
const getTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tag = yield tags_1.default.findByPk(id);
    if (tag) {
        res.json(tag);
    }
    else {
        res.json({
            msg: 'Tag doesn´t exists'
        });
    }
});
exports.getTag = getTag;
const addTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield tags_1.default.create(body);
        res.json({
            msg: 'Tag added'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error adding new tag'
        });
    }
});
exports.addTag = addTag;
const updateTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tag = yield tags_1.default.findByPk(id);
        if (tag) {
            yield tag.update(body);
            res.json({
                msg: 'Tag updated'
            });
        }
        else {
            res.status(404).json({
                msg: 'Tag doesn´t exists'
            });
        }
    }
    catch (error) {
        res.json({
            msg: 'Error updating tag'
        });
    }
});
exports.updateTag = updateTag;
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tag = yield tags_1.default.findByPk(id);
    if (!tag) {
        res.status(404).json({
            msg: 'Tag doesn´t exists'
        });
    }
    else {
        yield tag.destroy();
        res.json({
            msg: 'Tag deleted'
        });
    }
});
exports.deleteTag = deleteTag;
