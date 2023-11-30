"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tags_1 = __importDefault(require("./tags"));
const maker_1 = __importDefault(require("./maker"));
const category_1 = __importDefault(require("./category"));
const Product = connection_1.default.define('Product', {
    product_name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER
    },
    img_url: {
        type: sequelize_1.DataTypes.STRING
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: category_1.default,
            key: 'id'
        }
    },
    makerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: maker_1.default,
            key: 'id'
        }
    },
    tagIds: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.INTEGER),
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});
// Define associations between models
Product.belongsTo(category_1.default, { foreignKey: 'categoryId' });
Product.belongsTo(maker_1.default, { foreignKey: 'makerId' });
Product.belongsToMany(tags_1.default, {
    through: 'ProductTag',
    foreignKey: 'productId',
    otherKey: 'tagId'
});
// Create the ProductTag table
connection_1.default.define('ProductTag', {
    productId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Product,
            key: 'id'
        }
    },
    tagId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: tags_1.default,
            key: 'id'
        }
    }
});
exports.default = Product;
