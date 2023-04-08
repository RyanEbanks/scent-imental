const sequelize = require('../config/connection');
const { Product, ProductTag, Review, Tag, User, UserProduct } = require('../models');

const productData = require('./productData.json');
const productTagData = require('./productTagData.json');
const reviewData = require('./reviewData.json');
const tagData = require('./tagData.json');
const userData = require('./userData.json');
const userProductData = require('./userProductData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate(productData);

  await Tag.bulkCreate(tagData);
  
  await ProductTag.bulkCreate(productTagData);
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await Review.bulkCreate(reviewData);

  await UserProduct.bulkCreate(userProductData);

  process.exit(0);
};

seedDatabase();