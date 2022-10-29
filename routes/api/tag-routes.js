const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include:[
        {
          model: Product,
        attributes:["id", "product_name", "price", "stock", "category_id"],
        },
      ]
    });
    if(!tagData){
      res.status(404).json({message: "Was unable to find Tag data"});
      return;
    }
    res.status(200).json(tagData);
  }catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
  
      include:[
        {
          model: Product,
          attributes:["id","product_name", "price", "stock"],

        },
      ],
    }).then(categoryData =>{
      if(!categoryData){
        res.status(404).json({message: "no catergory with that id found"});

      }
        return res.json(categoryData);
    })
 
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(CategoryData => res.json(CategoryData))
  .catch(error =>{console.log(error);})

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
