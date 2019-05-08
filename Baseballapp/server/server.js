const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let gameData = {
  visitorTotal: 0,
  homeTotal: 0,
  outs: 0,
  innings: [0],
  gameEnd: false,
  gamePosition: 0
}

app.get('/api/run', function (req, res) {
  gameData.innings[gameData.gamePosition] += 1;
  if ((gameData.gamePosition % 2) === 0) {
    gameData.visitorTotal += 1;
  } else {
    gameData.homeTotal += 1;
  }
  res.json({ data: gameData });
})

app.get('/api/out', function (req, res) {
  if (gameData.outs + 1 === 3) {
    if (gameData.gamePosition + 1 === 6) {
      gameData.outs += 1;
      gameData.gameEnd = true;
    } else {
      gameData.outs = 0;
      gameData.gamePosition += 1;
      gameData.innings = [...gameData.innings, 0];
    }
  } else {
    gameData.outs += 1;
  }
  res.json({ data: gameData });
})

app.get('/api/newgame', function (req, res) {
  gameData = {
    visitorTotal: 0,
    homeTotal: 0,
    outs: 0,
    innings: [0],
    gameEnd: false,
    gamePosition: 0
  }
  res.json({ data: gameData });
})

app.post('/api/uploadgame', function (req, res) {
  gameData.visitorTotal = req.body.visitorTotal;
  gameData.homeTotal = req.body.homeTotal;
  gameData.outs = req.body.outs;
  gameData.gameEnd = req.body.gameEnd;
  gameData.innings = req.body.innings;
  gameData.gamePosition = req.body.gamePosition;
  res.json({ success: true });
})

app.listen(8000, () => {
  console.log(`Server is running on PORT 8000`);
});