const router = require('express').Router();
const { UserProduct } = require('../../models');

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

router.delete('/:id', async (req, res) => {
    console.log(req.body);
    console.log(req.params.id, req.session.user_id);
  try {
      const deletedFav = await UserProduct.destroy({
        where: {       
          product_id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      res.status(200).json(deletedFav);

    // sequelize.literal(
    //     `DELETE FROM userproduct WHERE product_id=${req.body.delete_id} AND user_id=${req.session.user_id}`
    // )

    // const favoritesData = await UserProduct.findAll({
    //    where: {
    //     product_id: req.body.delete_id,
    //    } 
    // });
    // console.log(favoritesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
