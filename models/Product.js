
const { ProductPimageSchema } =require('./ProductPimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
Underscoreid:String , 


pimage:  
ProductPimageSchema
 , 


ptitle:String 



})

module.exports = {
  Product : mongoose.model('product', productSchema),
}

