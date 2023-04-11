const router = require('express').Router();
const { UserProduct, User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        await UserProduct.create({
            user_id: req.session.user_id,
            product_id: req.body.product_id,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/', async (req, res) => {
  try {
    const favoritesData = await User.findAll({
       where: {
        user_id: req.session.user_id,
       } 
    });
    console.log(favoritesData);
    // await UserProduct.destroy({
    //   where: {       
    //     product_id: req.body.delete_id,
    //   },
    // });

    // res.status(200).json(favoritesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
