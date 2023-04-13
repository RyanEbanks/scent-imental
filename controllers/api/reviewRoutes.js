const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

//Runs when logged in user adds a review to the singleProduct page
router.post('/', withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Code for future capability to update/delete reviews

// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const [affectedRows] = await Review.update(req.body, {
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const reviewData = await Review.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!reviewData) {
//       res.status(404).json({ message: 'No review found with this id!' });
//       return;
//     }

//     res.status(200).json(reviewData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
