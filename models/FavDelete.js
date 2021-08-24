const Users = require ('../Schema/MainSchema');

function deleteFav(req,res) {

    try {

        const email = req.query.email;
        const id = req.params.index;
        Users.findOne({email:email},(err,data) =>{
console.log(data);
            data.flowerslist.splice(id,0);
            console.log('this is the data will splice on delete fun ' , data.flowerslist.splice(id,1));
            data.save();
            res.send(data);
        })
    }
    catch (err) {
        res.send(err);
    }
    
}

module.exports = deleteFav;