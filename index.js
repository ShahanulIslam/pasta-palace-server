const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors")
const chef = require("./data/chefs.json")
const foods = require("./data/foods.json")

app.use(cors())

app.get('/', (req, res) => {
  res.send("Chef is running")
})
app.get('/chef', (req, res) => {
  res.send(chef)
})
app.get('/foods', (req, res) => {
  res.send(foods)
})
app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const chefDetails = chef.find(c => c.id == id);
  res.send(chefDetails);
})

app.listen(port, () => {
  console.log(`Chef recipe hunter server running on port ${port}`)
})