const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome del paziente necessario'],
        trim: true
    },
    cognome: {
        type: String,
        trim: true,
    },
    codiceFiscale: {
        type: String,
        trim:true,
    },
    partitaIVA:{
        type:String,
        trim:true,
    },
    citta:{
        type:String,
        trim:true,
    },
    provincia:{
        type:String,
        trim:true,
    },
    CAP:{
        type:String,
        trim:true,
    },
    via:{
        type:String,
        trim:true,
    },
    civico:{
        type:String,
        trim:true,
    },
    telefono:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
    },
    nascita:{
        citta:{
            type:String,
            trim:true,
        },
        provincia:{
            type:String,
            trim:true,
        },
        data:{
            type:Date,
            trim:true,
        }
    },
    dataCreazione:{
        type:Date,
        default: Date.now(),
    },
    dataUltimaFattura:{
        type:Date
    },
    prezzoDefault:{
        type:Number,
    },
});
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
