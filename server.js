const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('Someone hit the root.')
    res.send('Hello from Node and Express')
})

const port = process.env.PORT || 7000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})