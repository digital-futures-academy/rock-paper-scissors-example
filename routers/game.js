const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  player1 = req.app.locals.player1

  res.render('game', {
    name: player1
  })
})

router.post('/', (req, res) => {
  const player1 = req.body.player1
  req.app.locals.player1 = player1

  res.redirect('/game')
})

module.exports = router
