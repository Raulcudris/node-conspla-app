const fs = require('fs');
const archivojson  = './db/data.json';

const guardarDb = (data) =>{
    //const archivo  = './db/data.txt';
    //fs.writeFileSync(archivo,JSON.stringify(data));    
    fs.writeFileSync(archivojson,JSON.stringify(data));
}

const leerDB =()=> {
    if(!fs.existsSync(archivojson)){
        return null;
    }
    const info = fs.readFileSync(archivojson,{encoding:'utf-8'});
    const data = JSON.parse(info);
    return data;
}

module.exports ={
    guardarDb,
    leerDB
}


