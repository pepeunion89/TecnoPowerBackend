import { Sequelize }from 'sequelize';

const sequelize = new Sequelize('tecnopowerdb', 'root', 'admin', {
    host: 'localhost',
    dialect:'mysql' 
  });

export default sequelize;