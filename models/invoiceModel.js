const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  dataEmissione: {
    type: Date,
    default: Date.now(),
  },
  dataIncasso: {
    type: Date,
    default: Date.now(),
  },
  valore: {
    type: Number,
    required: [true, 'Inserire un valore per la fattura'],
  },
  testo: {
    type: String,
    default: 'Trattamento massoterapico',
  },
  nOrdine: {
    type: Number,
    required: [true, "Numero d'ordine necessario per la fattura"],
  },
  paziente: {
    id: {
      type: mongoose.Schema.Types.ObjectID,
      required: [true, 'ID paziente necessario'],
    },
    nome: {
      type: String,
      required: [true, 'Nome del paziente necessario'],
      trim: true,
    },
    cognome: {
      type: String,
      trim: true,
    },
    codiceFiscale: {
      type: String,
      trim: true,
    },
    partitaIVA: {
      type: String,
      trim: true,
    },
    citta: {
      type: String,
      trim: true,
    },
    provincia: {
      type: String,
      trim: true,
    },
    CAP: {
      type: String,
      trim: true,
    },
    via: {
      type: String,
      trim: true,
    },
    civico: {
      type: String,
      trim: true,
    },
    nascita: {
      citta: {
        type: String,
        trim: true,
      },
      provincia: {
        type: String,
        trim: true,
      },
      data: {
        type: Date,
        trim: true,
      },
    },
  },
});
const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
