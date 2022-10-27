const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
try{
  const Data = await Category.findAll({
    include:[
      {
        model: Product,
        attributes:["id", "product_name", "price", "stock"],
      },
    ],
  });
 
    if(!Data){
      res.status(404).json({message: "Was unable to find the category"});
      return;
    }
        res.status(200).json(Data);
    }catch (error) {
      console.log(error);
      res.status(500).json(error);
      }
    });


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products!!
    Category.findOne({
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
          res.status(404).json({message: "no Id found"});

        }
          return res.json(categoryData);
      })
    });



router.post('/', (req, res) => {
  // create a new category
    Category.create(req.body).then(CategoryData => res.json(CategoryData))
    .catch(error =>{console.log(error);})

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
