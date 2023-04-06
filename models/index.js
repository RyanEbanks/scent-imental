const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Review = require("./Review");
const Tag = require("./Tag");
const User = require("./User");
const UserProduct = require("./UserProduct");

User.belongsToMany(Product, {
  foreignKey: "user_id",
  through: UserProduct,
});

Product.belongsToMany(User, {
  foreignKey: "user_id",
  through: UserProduct,
});

Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  through: ProductTag,
});

Tag.belongsToMany(Product, {
  foreignKey: "tag_id",
  through: ProductTag,
});

User.hasMany(Review, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Product.hasMany(Review, {
  foreignKey: "product_id",
});

Review.belongsTo(Product, {
  foreignKey: "product_id",
});

module.exports = { Product, ProductTag, Review, Tag, User, UserProduct };