const express = require('express')
const router = express.Router()
const Weapon = require('../src/weapon.js')

router.post('/', (req, res) => {
  const weapon = new Weapon(req.body.choice)
  const computer = new Weapon()
  const result = weapon.against(computer)
  req.app.locals.game = { result: result, player: weapon, computer: computer }

  res.redirect('/round')
})

router.get('/', (req, res) => {
  const game = req.app.locals.game

  res.render(game.result, {
    player: game.player.type,
    computer: game.computer.type
  })
})

module.exports = router
