'use strict';

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/flowers", { useNewUrlParser: true });
const db = mongoose.connection;
const myFavFlowers = new mongoose.Schema({

    name : String,
    photo : String,
    instructions : String

})

const userSchema = new mongoose.Schema({

    email : String,
    flowerslist : [myFavFlowers]
})

const Users = mongoose.model('Users', userSchema);

function flowersSeeds() {

    const user = new Users({
        email : 'shkokany98@gmail.com',
        drinks : []
    });

    user.save();
    
    const user2 = new Users({
        email : 'roaa.abualeeqa@gmail.com',
        drinks : []
    });
    user2.save();
}

// flowersSeeds();


module.exports = Users;

