const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors");

const app = express();
const datastore = new nedb({
    filename: "coffeelog.db",
    autoload: true
});

const list = [
    {
      "name": "Espresso",
      "place": "Coffee House A",
      "location": {
        "address": "123 Main St",
        "city": "New York",
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      "type": "Espresso",
      "rating": 8,
      "notes": "Strong and aromatic espresso with a rich crema layer.",
      "tastingRating": {
        "aroma": 9,
        "body": 8,
        "flavor": 8,
        "intensity": 9,
        "sweetness": 5,
        "aftertaste": 8
      },
      "_id": "IDIxAT4RmmnWmPiS"
    },
    {
      "name": "Latte",
      "place": "Cafe B",
      "location": {
        "address": "456 Elm St",
        "city": "Los Angeles",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "type": "Latte",
      "rating": 7,
      "notes": "Creamy and smooth latte with a hint of vanilla.",
      "tastingRating": {
        "aroma": 7,
        "body": 8,
        "flavor": 7,
        "intensity": 6,
        "sweetness": 6,
        "aftertaste": 7
      },
      "_id": "eCuv0nP3Aq4bNv7h"
    }
  ]

datastore.insert(list)


const restAPI = rest();
restAPI.addDatastore('coffees', datastore);

app.use(cors());
app.use("/", restAPI);

app.listen(3000, () => {
    console.log("API ready at http://localhost:3000");
})