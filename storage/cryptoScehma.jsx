import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CryptoModel = new Schema({
   name: {type: String},
   symbol: {type: String},
   rank: {type: Number},
   last_updated: {type: Date},
   qoutes: [{
      price: {type: Number},
   }]
})
