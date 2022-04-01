const Tarea = require("./tarea");
/**
 * _listado :
 * {'uuid-123556555555-554422':{id:12,desc: asdddff , completadoEn:995595} },
 */



class Tareas {
    _listado ={};

    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

}


module.exports = Tareas;




