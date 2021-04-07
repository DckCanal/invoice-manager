const express = require('express');
const morgan = require('morgan');
const invoiceRouter = require('./routes/invoiceRoutes');
const patientRouter = require('./routes/patientRoutes');

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/invoices', invoiceRouter);
app.use('/api/v1/patients', patientRouter);

module.exports = app;
