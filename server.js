require('dotenv').config();
const express = require('express');
const { connectCallback } = require('./database');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

const goodRouter = require('./routers/good.router')
const tradeRouter = require('./routers/trade.router')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/goods', goodRouter);
app.use('/trade', tradeRouter);

connectCallback(() => {
    app.listen(port, () => {
        console.log(`Trading app listening on port ${port}`)
    })
})