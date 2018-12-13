import express from 'express';

import Ingredient from '../models/ingredient';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    // Display all ingredient(s), sort by last one created
    Ingredient.find({}).sort({createdAt: -1}).exec()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  })
  .post((req, res) => {
    let data = new Ingredient(req.body);

    // Create single ingredient
    data.save()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });

// Display ingredient(s) with pagination, sort by last one created
router.route('/:page/:limit')
  .get((req, res) => {
    var query = {};
    var options = {
      page: parseInt(req.params.page) + 1,
      limit: parseInt(req.params.limit),
      sort: { createdAt: -1 },
    };

    // Display ingredient(s) with a pagination
    Ingredient.paginate(query, options)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });

router.route('/:id')
  .get((req, res) => {
    // Get single ingredient
    Ingredient.findById({_id: req.params.id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  })
  .put((req, res) => {
    // Update single ingredient
    Ingredient.findByIdAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  })
  .delete((req, res) => {
    // Delete single ingredient
    Ingredient.findByIdAndRemove({_id: req.params.id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  });

export default router;
