const Users = require ('../Schema/MainSchema');


function getFav(req,res) {

    const {email} = req.query;
    Users.find({email:email}, function (err, data){

        if (err) {
            console.log('hello from get fav');
        }
        else {

            res.send(data);
            // console.log(data);
        }
    })
    
}
module.exports = getFav;