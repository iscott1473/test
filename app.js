const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/', (req, res) => {
    res.send({
        data: 'from api',
        name: 'me',
        job: 'badass'
    })
})
app.listen(3001, () => (
    console.log('listening port 3001')
))