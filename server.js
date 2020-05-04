const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
const IP = process.env.IP || '0.0.0.0';

app.get('/', function (req, res) {
  res.send('Hello C9!');
});

app.listen(PORT, IP, function() {
  console.log(`Server is running at http://${IP}:${PORT}`);
});
