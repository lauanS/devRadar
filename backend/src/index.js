const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const connectionString = require('./utils/connectionString');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

mongoose.connect(connectionString(), 
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

server.listen(3333);



