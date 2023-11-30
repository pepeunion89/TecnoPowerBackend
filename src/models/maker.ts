import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Maker = db.define('Maker', {
    maker_name: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});

export default Maker;