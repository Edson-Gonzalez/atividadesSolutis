const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true}));

app.set('view engine', 'ejs')

const ObjectId = require('mongodb').ObjectID
 
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://edson:KsFxcSVXJpPPtJ6F@cluster0.kppho.mongodb.net/cursoReact_Solutis?retryWrites=true&w=majority";
 
MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  db = client.db('cursoReact_Solutis') // coloque o nome do seu DB
 
  app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
  })
})

//Menu
app.get('/', (req, res) => {
    res.render('index.ejs');
})

//Users Pages
app.get('/users', (req, res) => {
    db.collection('usuario').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('users/list.ejs', { data: results })
 
    })
})

app.get('/register', (req, res) => {
    var cursor = db.collection('usuario').find();
    res.render('users/register.ejs');
})

app.post('/users', function(req, res){
    console.log('Teste post...')
    db.collection('usuario').save(req.body, (err, result) => {
        if (err) return console.log(err)
     
        console.log('Salvo no Banco de Dados')
        res.redirect('/users')
      })
});

app.route('/edituser/:id')
    .get((req, res) => {
    var id = req.params.id
    
    db.collection('usuario').find(ObjectId(id)).toArray((err, result) => {
        if (err) return res.send(err)
        res.render('users/edit.ejs', { data: result })
    })
    })
    .post((req, res) => {
    var id = req.params.id
    var name = req.body.name
    var surname = req.body.surname
    
    db.collection('usuario').updateOne({_id: ObjectId(id)}, {
        $set: {
        name: name,
        surname: surname
        }
    }, (err, result) => {
        if (err) return res.send(err)
        res.redirect('/users')
        console.log('Atualizado no Banco de Dados')
    })
    })

app.route('/delete/:id')
    .get((req, res) => {
      var id = req.params.id
     
      db.collection('usuario').deleteOne({_id: ObjectId(id)}, (err, result) => {
        if (err) return res.send(500, err)
        console.log('Deletado do Banco de Dados!')
        res.redirect('/users')
      })
    })

//Product Pages
app.get('/products', (req, res) => {
    db.collection('produto').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('products/list.ejs', { data: results })
    
    })
})

app.get('/registerproduct', (req, res) => {
    var cursor = db.collection('produto').find();
    res.render('products/register.ejs');
})

app.post('/products', function(req, res){
    console.log('Teste post...')
    req.body.date = new Date();
    db.collection('produto').save(req.body, (err, result) => {
        if (err) return console.log(err)
        
        console.log('Salvo no Banco de Dados')
        res.redirect('/products')
        })
});

app.route('/editproduct/:id')
    .get((req, res) => {
    var id = req.params.id
    
    db.collection('produto').find(ObjectId(id)).toArray((err, result) => {
        if (err) return res.send(err)
        res.render('products/edit.ejs', { data: result })
    })
    })
    .post((req, res) => {
    var id = req.params.id
    var name = req.body.name
    var price = req.body.price
    
    db.collection('produto').updateOne({_id: ObjectId(id)}, {
        $set: {
        name,
        price
        }
    }, (err, result) => {
        if (err) return res.send(err)
        res.redirect('/products')
        console.log('Atualizado no Banco de Dados')
    })
    })

app.route('/deleteproduct/:id')
    .get((req, res) => {
        var id = req.params.id
        
        db.collection('produto').deleteOne({_id: ObjectId(id)}, (err, result) => {
        if (err) return res.send(500, err)
        console.log('Deletado do Banco de Dados!')
        res.redirect('/products')
        })
    })