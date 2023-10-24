let express = require('express');
let app = express();

const bodyParser = require('body-parser') ;
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.post("/name", (req, res) => {
  res.json({name : req.body.first + " " + req.body.last})
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time : req.time});
});

app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.send({echo : word});
});

app.get("/name", (req, res) => {
  res.json({name : req.query.first + " " + req.query.last})
});

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
      res.json({message: "Hello json".toUpperCase()})
    } else {
    res.json({message: "Hello json"})
    }
});


module.exports = app; 


































 module.exports = app;
