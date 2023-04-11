const router = require('express').Router();
const { response } = require('express');
const {Product, ProductTag, Review, Tag, User, UserProduct} = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        // res.status(200).json("Homepage Route Working!")
        res.render('homepage', {user_id: req.session.user_id, logged_in: req.session.logged_in});
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
            include: [User]
          }
        ],
      });
      const product = productData.get({plain: true});
      //Debugging
      console.log("product:", product);
      res.render('singleProduct', { product, logged_in: req.session.logged_in });
  } catch(err) {
      res.status(500).json(err);
  }
});

// Gets all products matching that tag
router.get('/category/:tag', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
      {
        model: Tag,
        through: ProductTag,
        where: {
          tag_name: req.params.tag
        },
      }
      ],
    });

    const product = productData.map((prod) => prod.get({ plain: true }));
    
    if (!product || product.length === 0) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    
    // console.log("Rendering category product page");
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

router.get('/user/:id', async (req, res) => {
  try {
      // res.status(200).json("Single item Route Working!")
      const userData = await User.findByPk(req.params.id, {
        include: [
          {
            model: Product, 
            through: UserProduct,
          }
        ],
      });
      const user = userData.get({plain: true});
      console.log(user);
      res.render('favorites', { user, logged_in: req.session.logged_in });
  } catch(err) {
      res.status(500).json(err);
  }
});
  
  module.exports = router;