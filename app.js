const express = require('express');
var QRCode = require('qrcode')
const app = express()
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    QRCode.toDataURL('“Your A/C XXXXX has a debit by transfer of Rs 1000.00 on 12/14/2022.” This message just came to me from my SBI account', function (err, url) {
        const html = `<div style="display: grid;place-items: center; left:45%; top:35%; position:absolute">
        <img width="150" height="150" src=${url} alt='): Not Found'/>
        <p style="font-family:Gill Sans,garamond,serif;
        font-weight:800">Scan and Pay ₹ 1000/-</p>
        </div>`
        res.send(html)
    })
})


app.listen(PORT, () => {
    console.log(`App Listen on : http://localhost:${PORT}`)
})