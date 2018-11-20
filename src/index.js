var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('consultou....')
  res.json({nome: 'NAME=navs.zip ADDR=/Verifone_telecarga/vx685/navs.zip HOST=187.72.175.116 IP=187.72.175.116 PORT=82 ERR=FILE_RET WRT=SIM'});
});

app.post('/atualizar', function(req, res){
    res.json({pos: "<FILE NAME=testando.txt ADDR=/testando.txt ERR=FILE_RET WRT=SIM>"})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});