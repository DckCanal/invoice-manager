const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({});
const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
