const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  //Category.findAll()
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products!!

  // Category.findbyPK(req.parmas.id)
});

router.post('/', (req, res) => {
  // create a new category

  //Category.create(req.body.category_name)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  /** 
   * // Category.update(req.body.id, {
   *  where { id: req.parmas.id }
   * })
   * */
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  //  Category.destory
});

module.exports = router;
