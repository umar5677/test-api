const express = require('express');
const router = express.Router();
const testServices = require('../services/test');

// GET test data
router.get('/', async function(req, res, next) {
  try {
    res.json(await testServices.getLocal());
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});

module.exports = router;