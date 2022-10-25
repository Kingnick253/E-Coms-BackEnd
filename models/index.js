// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products.belongsTo Category
  Product.belongsTo(Category, {
    deleteOn: 'CASCADE',
    foriegnKey: 'catergory_id'
  });

// Categories have many Products
   Category.hasMany(Product,{
    foreignKey: 'catergory_id'
   });
// Products belongToMany Tags (through ProductTag)
   Product.belongsToMany(ProductTag, {
    deleteOn: 'CASCADE',
    foreignKey: 'product_id'
   });
// Tags belongToMany Products (through ProductTag)
   Tag.belongsToMany(Product, {
    deleteOn: "CASCADE",
    foreignKey:'tag_id'
   });
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
