require('colors');
const { inquirerMenu, 
         Pausa ,
        leerInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


console.clear();

const main = async()=>{

    let opt ='';
    const  tareas  = new Tareas();
    do{
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
            break;

            case '2':
                  //crear opcion
                console.log(tareas._listado);
            break;

            case '3':
                //crear opcion
            break;

            case '4':
                //crear opcion
            break;

            case '5':
                //crear opcion
            break;

            case '6':
                //crear opcion
            break;

            case '0':
                //crear opcion
            break;
        }
         

        await Pausa();

    }while(opt!=='0');

}

main();







