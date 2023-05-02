const express = require("express");
const app =express();
const port =5000;
const chef = require("./data/chefs.json")

app.get('/', (req, res) => {
    res.send("Chef is running")
  })
app.get('/chef', (req, res) => {
    res.send(chef)
  })
  
  app.listen(port, () => {
    console.log(`Chef recipe hunter server running on port ${port}`)
  })