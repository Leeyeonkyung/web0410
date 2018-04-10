var express = require('express');
var app = express();

 var bodyParser = require('body-parser');
 app.use(bodyParser.json()); // support json encoded bodies
 app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => { //=> == function() 이다. function (req,res)


  res.charset = 'UTF-8';
  console.log(req.query);
  res.send('GET으로 넘어온 name은 '+ req.query.name + '입니다.');
} );
//템플릿
app.get('/template',(req.res)=>{
var tp1=_template(
  '<h1>안녕 제 이름은 <%=name%>이고 나이는 <%=age%></h1>'
);
var obj={name: "홍길동",age:300};
res.snd(tp1(obj) );
});

app.post('/', (req, res) => {
  res.charset = 'UTF-8';

    console.log(req.query);
  res.send('POST로 넘어온 name은 '+ req.body.name + '입니다.');
} );


app.listen(8080, () => console.log('Example app listening on port 8080!'));
