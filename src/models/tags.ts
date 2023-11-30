import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Tag = db.define('Tag', {
    tag_name: {
        type: DataTypes.STRING
    }
},{
    createdAt: false,
    updatedAt: false
});

export default Tag;