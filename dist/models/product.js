"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Product = connection_1.default.define('Product', {
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    img_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    // CATEGORY DEL PRODUCTO
    category: {
        type: sequelize_1.DataTypes.JSON(),
        allowNull: false
    },
    // MAKER DEL PRODUCTO
    maker: {
        type: sequelize_1.DataTypes.JSON(),
        allowNull: false
    },
    // COLORES DEL PRODUCTO
    color1_name: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color1_hex: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color2_name: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color2_hex: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color3_name: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color3_hex: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color4_name: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color4_hex: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color5_name: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    color5_hex: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: true
    },
    // TAGS DEL PRODUCTO
    tags: {
        type: sequelize_1.DataTypes.JSON(),
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
});
/*

Este codigo sirve para cuando indexamos con los id de otras clases, si guardamos el objeto entero no tiene sentido indexar nada / JOINear

Product.hasOne(Category);
Product.hasOne(Maker);
Product.hasMany(Tag);*/
exports.default = Product;
