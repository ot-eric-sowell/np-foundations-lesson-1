const express = require('express')

const app = express()


app.get('/', (req, res) => {
    console.log('Somebody came to the root.')
    res.send('You have reached the root of the express site.')
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})