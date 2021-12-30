const Tarea=require('./tarea');
require('colors');

class Tareas {
    _listado={};

    constructor(){
        this._listado={};
    };

    crearTarea(desc=''){
        const tarea=new Tarea(desc);
        this._listado[tarea.id]=tarea;
    }

    getTareas(){
        return this._listado;
    }

    setTareaCompletada(id){
        const tarea=this._listado[id];
        tarea.completadoEn=Date.now();
        this._listado[tarea.id]=tarea;
    }

    get listadoArray(){
        const listado=[];

        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        });

        return listado;
    }
};

module.exports=Tareas;