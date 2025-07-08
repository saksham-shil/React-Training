const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use(express.json());

app.post('/login', (res) => {
  res.status(200).json({
    token: 'randomtokenthatalwasywork'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));