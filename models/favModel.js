const Users = require ('../Schema/MainSchema');

function FavFlowers(req,res) {

    const {email,name,photo,instructions} = req.body;

    Users.find({email:email}, (err,flowerData) =>{

        if (err) {
            res.send ('Error from fav post ');

        }else {
            console.log(flowerData[0].flowerslist);
            flowerData[0].flowerslist.push({

                name : name ,
                photo : photo,
                instructions : instructions
            })
            flowerData[0].save();
            res.send(flowerData[0].flowerslist)
        }
    })
    
}

module.exports = FavFlowers;