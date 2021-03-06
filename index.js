var _ =require('underscore');
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

app.get('/template',(req,res)=>{
  res.charset ='UTF-8';
var tp1=_.template(
  '<h1>안녕 제 이름은 <%=name%>이고 나이는 <%=age%></h1>'
); //tpl은 구멍을 매꿔줄 오브젝트를 받아서 스트링을 톨려주는 함수
var obj={name: '홍길동',age:300};
res.send(tp1(obj) );
});
//http://localhost:8080/rowcol?row=4&col=6
app.get('/rowcol',(req ,res)=> {
    res.charset ='UTF-8';
    var checkbox= '<input type="checkbox">';
    var row=req.query.row;
    var col=req.query.col;
    var string='';
 string+='<form>';

    for(var i=0; i< col;i++){
      string+=checkbox;
    }
    string+='</form>';

     var result='';
      for(var i=0; i< row;i++){
        result += string;
      }
      res.send(result);
});




app.post('/', (req, res) => {
  res.charset = 'UTF-8';

    console.log(req.query);
  res.send('POST로 넘어온 name은 '+ req.body.name + '입니다.');
} );


app.listen(8080, () => console.log('Example app listening on port 8080!'));
