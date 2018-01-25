const express = require('express')
const { getOwnersByPetId } = require('../actions')

const router = express.Router()

router.get('/', (req, res, next) => {
  getOwnersByPetId()
    .then(owners => res.render('owners/index', {owners}))
    .catch(next)
})

module.exports = router
