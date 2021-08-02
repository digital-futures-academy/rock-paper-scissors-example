const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

const indexRouter = require('./routers/index')
const gameRouter = require('./routers/game')
const roundRouter = require('./routers/round')

app.use('/', indexRouter)
app.use('/game', gameRouter)
app.use('/round', roundRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
