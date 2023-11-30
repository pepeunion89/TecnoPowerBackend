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
exports.deleteMaker = exports.updateMaker = exports.addMaker = exports.getMaker = exports.getMakers = void 0;
const maker_1 = __importDefault(require("../models/maker"));
const getMakers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listmakers = yield maker_1.default.findAll();
    res.json(listmakers);
});
exports.getMakers = getMakers;
const getMaker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maker = yield maker_1.default.findByPk(id);
    if (maker) {
        res.json(maker);
    }
    else {
        res.json({
            msg: 'Maker doesn´t exists'
        });
    }
});
exports.getMaker = getMaker;
const addMaker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield maker_1.default.create(body);
        res.json({
            msg: 'Maker added'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error adding new maker'
        });
    }
});
exports.addMaker = addMaker;
const updateMaker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const maker = yield maker_1.default.findByPk(id);
        if (maker) {
            yield maker.update(body);
            res.json({
                msg: 'Maker updated'
            });
        }
        else {
            res.status(404).json({
                msg: 'Maker doesn´t exists'
            });
        }
    }
    catch (error) {
        res.json({
            msg: 'Error updating maker'
        });
    }
});
exports.updateMaker = updateMaker;
const deleteMaker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const maker = yield maker_1.default.findByPk(id);
    if (!maker) {
        res.status(404).json({
            msg: 'Maker doesn´t exists'
        });
    }
    else {
        yield maker.destroy();
        res.json({
            msg: 'Maker deleted'
        });
    }
});
exports.deleteMaker = deleteMaker;
