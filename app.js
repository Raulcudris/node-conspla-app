require('colors');

const { guardarDb , leerDB} = require('./helpers/GuardarArchivo');

const { inquirerMenu, 
        Pausa ,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
    } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');


console.clear();

const main = async()=>{

    let opt ='';
    const  tareas  = new Tareas();
    const tareaDB = leerDB();

    if(tareaDB){//cargar Tareas
        tareas.cargarTareasFromArray(tareaDB);
    }

    do{
        //Imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
            break;

            case '2':
                  //crear opcion
                   tareas.listadoCompleto();
            break;

            case '3':
                //crear opcion
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                //crear opcion
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                //cre
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;

            case '6':
                //crear opcion
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== '0'){
                    const ok = await confirmar('¿Estas seguro?');
                     if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada Correctamente!!');
                    }
                }               
            break;

            case '0':
                //crear opcion
            break;
        }         
        guardarDb(tareas.listadoArr);
        await Pausa();

    }while(opt!=='0');

}
main();







