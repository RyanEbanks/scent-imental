const router = require('express').Router();
const { UserProduct } = require('../../models');

//Runs when logged in user adds an item to their favorites from the singleProduct page
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

//Runs when logged in user deletes a favorite item from their favorites page
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

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
