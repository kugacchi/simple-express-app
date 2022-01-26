const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Hello AppRunner2!');
  res.send('Hello AppRunner2!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
