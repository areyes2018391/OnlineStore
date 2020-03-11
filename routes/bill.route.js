'use strict'

var express = require('express');
var billController = require('../controllers/bill.controller');
var api = express();
var middlewareAuth = require('../middlewares/authenticated');

api.post('/createBill/:id', billController.createBill);

module.exports = api;