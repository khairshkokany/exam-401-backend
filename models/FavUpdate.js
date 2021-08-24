const Users = require ('../Schema/MainSchema');


function updateFav(req,res) {

    const index = req.params.id;
    const {email , name , photo , instructions } = req.body;

    Users.findOne({email : email} , (err , afterDelData) => {

        if (err) {
            res.send('error');

        }else {

            const updatedDta = {
                name : name,
                photo :photo,
                instructions : instructions,
                
            };
            afterDelData.flowerslist.splice(index , 1 , updatedDta);
            afterDelData.save();
            res.send(afterDelData.flowerslist);
        }
    })
}


module.exports = updateFav;