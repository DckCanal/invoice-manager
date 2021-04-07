const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    dataEmissione:{
        type:Date,
        default: Date.now(),
    },
    dataIncasso:{
        type:Date,
        default: Date.now(),
    },
    valore:{
        type:Number,
        required:[true,'Inserire un valore per la fattura']
    },
    testo:{
        type:String,
        default: 'Trattamento massoterapico'
    },
    nOrdine:{
        type:Number,
        required: [true,'Numero d\'ordine necessario per la fattura']
    },
    pazienteID:{}
});
const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
