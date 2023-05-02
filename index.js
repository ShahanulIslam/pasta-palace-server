const express = require("express");
const app =express();
const port =5000;

app.get('/', (req, res) => {
    res.send("Chef is running")
  })
  
  app.listen(port, () => {
    console.log(`Chef recipe hunter server running on port ${port}`)
  })