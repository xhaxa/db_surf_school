const inventaryModel = require('../models/inventary.model')


function seeInventary(req, res) {
  inventaryModel.find(req.query)
  .then((inventary) => {
    res.json(inventary)
  })
  .catch((err) => {
    res.json(err)
  })
}

module.exports = seeInventary


