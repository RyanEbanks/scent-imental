const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserProduct extends Model {}

UserProduct.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
});

module.exports = UserProduct;
