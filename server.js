var express = require('express');
var morgan = require('morgan');
var path = require('path');
 var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/webapp', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'appindex.html'));
});

app.get('/webapp#', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'appindex.html'));
});

app.get('/ui/applayout.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'applayout.css'));
});

var Articles = {
    'article1':{
    title: 'Article One',
    heading: 'Artice One',
    date: '25 March',
    content: ` <P>
             First paragraph of the first article , i have now made a page in my web app for an article , lestg get started with the server side temnplating to make more such pages dynamically.
         </P>
         
         <p>
             lorel ipsum lorel ipsum lorel ipsum lorel ipsumlorel ipsum lorel ipsum lorel ipsum lorel ipsum v lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum 
         </p> `},
    'article2':{
        title: 'Article Two',
    heading: 'Artice Two',
    date: '15 March',
    content: ` <P>
             First paragraph of the first article , i have now made a page in my web app for an article , lestg get started with the server side temnplating to make more such pages dynamically.
         </P>
         
         <p>
             lorel ipsum lorel ipsum lorel ipsum lorel ipsumlorel ipsum lorel ipsum lorel ipsum lorel ipsum v lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum 
         </p> `},
    'article3':{
        title: 'Article three',
    heading: 'Artice Three',
    date: '05 March',
    content: ` <P>
             First paragraph of the first article , i have now made a page in my web app for an article , lestg get started with the server side temnplating to make more such pages dynamically.
         </P>
         
         <p>
             lorel ipsum lorel ipsum lorel ipsum lorel ipsumlorel ipsum lorel ipsum lorel ipsum lorel ipsum v lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum lorel ipsum 
         </p> `
    }
};

function createtemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    
    var htmltemplate = `
      
      <html>
         <head>
            <title>${title}</title>
            <meta name = "viewport" content="width = device-width, intial-scale= 1"/>
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
          <div class = "container">
          <div> <a href = "/webapp" >Home</a></div>
          <hr/>
          <div>
              <h3>${heading}</h3>
          </div>
          
         <div>
             <P>${date}</P>
         </div>
         
         <div id="content">
             
             ${content}
         </div>
          </div>
        </body>
    </html>  
    `;
    
return htmltemplate;
}



app.get('/:articlename', function (req, res){
    var articlename=req.params.articlename;
 res.send(createtemplate(Articles[articlename]));

    if(articlename==article1){
        counter1 = counter1 + 1;
    }
    
    if(articlename==article2){
        counter2 = counter2 + 1;
    }
    
    if(articlename==article3){
        counter3 = counter3 + 1;
    }
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/960x360-cover.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '960x360-cover.png'));
});

app.get('/ui/80x80.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '80x80.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
