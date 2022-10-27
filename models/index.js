// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products.belongsTo Category
  Product.belongsTo(Category, {
    
    foriegnKey: 'catergory_id',
  });

// Categories have many Products
   Category.hasMany(Product,{
    foreignKey: 'catergory_id',
   });
// Products belongToMany Tags (through ProductTag)
   Product.belongsToMany(ProductTag, {
    through: 'ProductTag',
    foreignKey: 'product_id',
   });
// Tags belongToMany Products (through ProductTag)
   Tag.belongsToMany(Product, {
    
    through: 'ProductTag',
    foreignKey:'tag_id',
   });
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
