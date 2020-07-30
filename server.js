const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const available_times = [
  { "id": 2, "start_time": "2020-02-28T16:00:00.000Z" },
  { "id": 6, "start_time": "2020-02-28T21:00:00.000Z" },
  { "id": 9, "start_time": "2020-02-28T14:00:00.000Z" }
];

app.get('/astronaut/time_slots', (req, res) => {
  res.send(available_times);
});

app.post('/astronaut/time_slots', (req, res) => {
  res.send({ id: req.body.id });
});

app.listen(5000, () => {
  console.log('Things are happening on port 5000');
});