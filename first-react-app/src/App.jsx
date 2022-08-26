import React, { useState, useRef, useEffect} from "react";
import { Additem } from "./Additem";
import { Lista } from "./Lista";
const keyTask='taskKey'
function App() {
    const x = useRef();
    const [tareas, setTareas] = useState([
        { id: 0, tarea: "Hacer Super", completed: false },
    ]);
    useEffect(()=>{
        const savedTask=JSON.parse(localStorage.getItem(keyTask))
        if(savedTask){
            setTareas(savedTask)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem(keyTask,JSON.stringify(tareas))
    },[tareas])

    function handlerAddItem() {
        const nuevaTarea = x.current.value;
        if (nuevaTarea === "") return;
        setTareas([...tareas, { id: tareas.length, tarea: nuevaTarea, completed: false }]);
        x.current.value = null;
    }
    function handlerDelItem(){
        const newTareas = tareas.filter((tarea)=>!tarea.completed)
        setTareas(newTareas)
    }
    function toggleStatus(id){
        const newTareas=[...tareas]
        const tarea= newTareas.find((tareaSelect)=> tareaSelect.id === id)
        tarea.completed= !tarea.completed
        setTareas(newTareas)
    }
    return (
        <main className="bg-stone-700 h-screen grid grid-cols-1 justify-items-center content-start">
            <Additem referencia={x} funcionAdd={handlerAddItem} funcionDel={handlerDelItem}/>
            <Lista tareas={tareas} toggleStatus={toggleStatus}/>
            <div className="text-yellow-300">Te quedan {tareas.filter((tareasR)=>!tareasR.completed).length} pendientes</div>
        </main>
    );
}

export default App;
