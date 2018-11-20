const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000

app.get('/', function (req, res) {
    console.log('consultou....')
  res.json({nome: 'NAME=navs.zip ADDR=/Verifone_telecarga/vx685/navs.zip HOST=187.72.175.116 IP=187.72.175.116 PORT=82 ERR=FILE_RET WRT=SIM'});
});

app.post('/atualizar', function(req, res){
    res.json({pos: "<FILE NAME=testando.txt ADDR=/testando.txt ERR=FILE_RET WRT=SIM>"})
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});