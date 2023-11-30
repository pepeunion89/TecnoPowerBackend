import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Tag from './tags';
import Maker from './maker';
import Category from './category';

const Product = db.define('Product', {
    product_name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    },
    img_url: {
        type: DataTypes.STRING
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Category,
          key: 'id'
        }
      },
      makerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Maker,
          key: 'id'
        }
      },
      tagIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
      }
},{
    createdAt: false,
    updatedAt: false
});

// Define associations between models
Product.belongsTo(Category, { foreignKey: 'categoryId' });
Product.belongsTo(Maker, { foreignKey: 'makerId' });
Product.belongsToMany(Tag, {
    through: 'ProductTag',
    foreignKey: 'productId',
    otherKey: 'tagId'
  });

// Create the ProductTag table
db.define('ProductTag', {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Product,
        key: 'id'
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Tag,
        key: 'id'
      }
    }
  });

export default Product;