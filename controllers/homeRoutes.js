const router = require('express').Router();
const {Product, ProductTag, Review, Tag, User, UserProduct} = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        // res.status(200).json("Homepage Route Working!")
        res.render('homepage', {logged_in: req.session.logged_in});
    } catch(err) {
        res.status(500).json(err);
    }
});
  
// Gets a single item
router.get('/item/:id', async (req, res) => {
  try {
      // res.status(200).json("Single item Route Working!")
      const productData = await Product.findByPk(req.params.id, {
        include: [
          User,
          {
            model: Review,
            include: [User, Product],
            where: {
              product_id: req.params.id
            },
          }
        ],
      });
      const product = productData.get({plain: true});
      console.log(product);
      res.render('singleProduct', { product, logged_in: req.session.logged_in });
  } catch(err) {
      res.status(500).json(err);
  }
});

// Gets all products matching that tag
router.get('/category/:tag', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [{all: true}],
    });
    
    const product = productData.map((prod) => prod.get({ plain: true }));
    
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    // res.status(200).json("Retrieving all tags Route Working!")
    res.render('categoryProduct', { product, logged_in: req.session.logged_in });
  } catch(err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {logged_in: req.session.logged_in});
  // res.status(200).json("Login Route Working!")
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup', {logged_in: req.session.logged_in});
  // res.status(200).json("Signup Route Working!")
});
  
  module.exports = router;