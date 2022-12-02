const express = require('express')
const app = express()
const port = 4000

//Allows access between the 2 browsers
const cors = require('cors');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoose = require('mongoose');

main().catch(err => console.log(err));
//reading in the mongodb
async function main() {
  await mongoose.connect('mongodb+srv://admin1:admin@cluster0.my5ieok.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
  });
  
  const bookModel = mongoose.model('ReadBooks', bookSchema);


//get hello world to display
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/books',(req,res)=>{
    console.log(req.body);
    //Post the schemas 
    bookModel.create({
      title: req.body.title,
      cover: req.body.cover,
      author: req.body.author
    })
    res.send('Data Recieved');
  })

//Find Id books
app.get('/api/books', (req, res) => {
    bookModel.find((error, data) => {
     res.json(data);
    })
   })
   //Get data searching the unique ID return data
   app.get('/api/book/:id', (req,res)=>{
     console.log(req.params.id)
     bookModel.findById(req.params.id,(error,data)=>{
       res.json(data);
     })
     res.send('data');
   })
   
   app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
   })