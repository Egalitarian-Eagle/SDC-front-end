import mongoose from 'mongoose';
const { Schema } = mongoose;

const productsSchema = new Schema({
  id: Integer,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{ feature: String, value: String }]
});

const stylesSchema = new Schema({
  product_id: Integer,
  results: [
    {
      style_id: Integer,
      name: String,
      original_price: Stirng,
      sale_price: String,
      default?: Boolean,
      photos: [{ thumbnail_url: String, url: String }],
      skus: { sku_id: { quantity: Integer, size: String }}
    },
  ]
});

const relatedProductsSchema = new Schema({
  Related: [Number]
});