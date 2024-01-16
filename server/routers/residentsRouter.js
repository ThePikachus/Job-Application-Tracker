const express = require('express');
const peopleController = require('../controllers/peopleController.js');
const router = express.Router();

router.get('/',
peopleController.getResidents,
  (req, res) => res.status(200).json(res.locals.residents)
);

router.get('/#name',
peopleController.getOneResident,
  (req, res) => res.status(200).json(res.locals.oneResident)
);