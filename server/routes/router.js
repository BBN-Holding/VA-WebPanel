const express = require('express')

const GuildCtrl = require('../controllers/guild-ctrl')

const router = express.Router()

router.get('/guild/:id/user/:id', GuildCtrl.getUserById)

module.exports = router
