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

  const products = await Product.bulkCreate(productData);
  
  const tags = await Tag.bulkCreate(tagData);
  
  const productTags = await ProductTag.bulkCreate(productTagData);
  
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const reviews = await Review.bulkCreate(reviewData);
  
  const userProducts = await UserProduct.bulkCreate(userProductData);


  process.exit(0);
};

seedDatabase();