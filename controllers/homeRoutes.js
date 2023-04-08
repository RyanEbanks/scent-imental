const router = require('express').Router();
const {Product, ProductTag, Review, Tag, UserProduct} = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        // res.status(200).json("Homepage Route Working!")
        res.render('homepage');
    } catch(err) {
        res.status(500).json(err);
    }
  });
  
  // Gets a single item
  router.get('/item/:id', async (req, res) => {
    try {
        res.status(200).json("Single item Route Working!")
    } catch(err) {
        res.status(500).json(err);
    }
  });

  // Gets all products matching that tag
  router.get('/category/:tag', async (req, res) => {
    try {
      const productData = await Product.findAll({
        include: [ProductTag, UserProduct, Tag],
      });
      
      const product = productData.map((prod) => prod.get({ plain: true }));

      res.render('categoryProduct', { product });
      // res.status(200).json("Retrieving all tags Route Working!")
    } catch(err) {
        res.status(500).json(err);
    }
  });
  

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
    // res.status(200).json("Login Route Working!")
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
    // res.status(200).json("Signup Route Working!")
  });
  
  module.exports = router;