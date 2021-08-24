'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT || 3001;
const getFlowers = require('./models/flowers');
const FavFlowers = require('./models/favModel');
const getFav = require('./models/FavGet');
const deleteFav = require('./models/FavDelete');
const updateFav = require('./models/FavUpdate');


const getUserSchema = require("./Schema/MainSchema")


server.get('/flowers',getFlowers)
server.post('/favflowers',FavFlowers)
server.get('/getfav',getFav)
server.delete('/deletefav/:index',deleteFav)
server.put('/updateflowers/:id',updateFav)
server.listen(PORT, () =>console.log('connected'));