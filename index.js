const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './client/dist')));

app.get('/listings', (req, res) => {
  Listing.find((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/listings/:home', (req, res) => {
  const home = { home: Number(req.params.home) };
  Listing.find(home, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.delete('/listings/:home', (req, res) => {
  const home = { home: Number(req.params.home) };
  Listing.deleteOne(home, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});

const uri = 'mongodb+srv://kyle:fecmongo@mvpcluster.kba0n.mongodb.net/fec-listing-details?retryWrites=true&w=majority'

const db = mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

// schema
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  home: { type: Number, unique: true },
  title: String,
  location: String,
  rating: Number,
  photoUrls: [String],
});

const Listing = mongoose.model('Listing', listingSchema);

