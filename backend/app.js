const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const User        = require('./models/users');
const qus         = require('./models/question');

const app = express();

mongoose.connect("mongodb+srv://azharul:8sWQpET1q2yMm2Fn@cluster0-hflbv.mongodb.net/confer?retryWrites=true", { useNewUrlParser: true })
  .then(() => {
    console.log('Connected To Database!!');
  }).catch(() => {
    console.log('Connection Failed');
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Register New User
app.post('/confer/users/', (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    bio: req.body.bio,
    dept: req.body.dept,
    batch: req.body.batch,
    dob: req.body.dob,
  });
  user.save().then(createdUser => {
    res.status(201).json({
      status: true
    });
  });
});

// Get User Info
app.get('/confer/users/:email', (req, res, next) => {
  User.findOne({email: req.params.email}).then(documents => {
    res.status(200).json({
      response: documents
    });
  })
  .catch(err => {
    console.log(err);
  });
});

// Edit User Profile
app.get('/confer/upprofile/:email/:value1/:value2/:value3/:value4/:value5/:value6/:value7/:value8', (req, res, next) => {
  const query = {
    name: req.params.value1,
    email: req.params.value2,
    password: req.params.value3,
    bio: req.params.value4,
    dept: req.params.value5,
    batch: req.params.value6,
    dob: req.params.value7,
    tags: req.params.value8
  }
  User.findOneAndUpdate({email: req.params.email}, query).then(response => {
    res.status(200).json({
      message: "Update Request Goted",
      info: response
    });
  })
  .catch(err => {
    console.log(err);
  });
});

// Added Question
app.post('/confer/question/', (req, res, next) => {
  const question = new qus({
    title: req.body.title,
    detail: req.body.detail,
    tags: req.body.tags,
    user: req.body.user,
    time: req.body.time
  });
  question.save().then(createdUser => {
    res.status(201).json({
      status: true
    });
  });
});

// Get Question Details
app.get('/confer/question/:id', (req, res, next) => {
  qus.findOne({_id: req.params.id}).then(documents => {
    res.status(200).json({
      response: documents
    });
  })
  .catch(err => {
    console.log(err);
  });
});

// Get All Question
app.get('/confer/questions/', (req, res, next) => {
  qus.find().sort({ time: -1 }).then(documents => {
    res.status(200).json({
      response: documents
    });
  })
  .catch(err => {
    console.log(err);
  });
});

// Search People
app.get('/confab/search/:value', (req, res, next) => {
  User.find({name: {$regex: '/*' + req.params.value + '/*'}}).then(response => {
    res.status(200).json({
      message: "Search Request Goted",
      info: response
    });
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = app;