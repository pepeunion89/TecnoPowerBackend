import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Product = db.define('Product', {
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // CATEGORY DEL PRODUCTO
  category: {
    type: DataTypes.JSON(),
    allowNull: false
  },
  // MAKER DEL PRODUCTO
  maker: {
    type: DataTypes.JSON(),
    allowNull: false
  },
  // COLORES DEL PRODUCTO
  color1_name: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color1_hex: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color2_name: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color2_hex: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color3_name: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color3_hex: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color4_name: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color4_hex: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color5_name: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  color5_hex: {
    type: DataTypes.STRING(),
    allowNull: true
  },
  // TAGS DEL PRODUCTO
  tags: {
    type: DataTypes.JSON(),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

/*

Este codigo sirve para cuando indexamos con los id de otras clases, si guardamos el objeto entero no tiene sentido indexar nada / JOINear

Product.hasOne(Category);
Product.hasOne(Maker);
Product.hasMany(Tag);*/

export default Product;