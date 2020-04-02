
const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Still cant upload your app? :O'))

app.listen(port, () => console.log(`Example app listening at :${port}`))
