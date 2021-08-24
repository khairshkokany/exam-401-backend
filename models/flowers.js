const axios  = require ('axios');
async function getFlowers(req,res) {
    
const URL = 'https://flowers-api-13.herokuapp.com/getFlowers';

axios
.get(URL)
.then(item =>{

    let dataFlw = item.data;
    res.send(flowersObject(dataFlw));

}).catch(err=>{
    res.send(err);
})

}

const flowersObject = (flowersArr)=>{

    let flowersArray = flowersArr.flowerslist;
    const flowersJson = [];
    flowersArray.map(element =>{

        const instructions = element.instructions;
        const photo = element.photo;
        const name = element.name;
        flowersJson.push(new Flowers(instructions,photo,name))
    })
    return flowersJson;
}

class Flowers {
    constructor(instructions,photo,name)
    {
        this.instructions = instructions;
        this.photo = photo;
        this.name = name;
    }
}
module.exports = getFlowers;