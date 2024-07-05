const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();

client.set('visits', 0); // Initializing the number of visits on the redis server

app.get('/', (req, res) => {
  client.get('visits', (err, visit) => {
    res.send('Number of visits is: ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
