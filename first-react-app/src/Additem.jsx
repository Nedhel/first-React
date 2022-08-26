import { BiPlusCircle,BiTrashAlt } from "react-icons/bi";
export function Additem({referencia,funcionAdd, funcionDel}){
    return(
    <div className="w-1/3 flex items-center mt-3">
    <input ref={referencia} className="w-3/4" type='text' placeholder="Agregar Nueva Tarea"></input>
    <button onClick={funcionAdd} className="text-2xl bg-violet-300 hover:bg-violet-800 hover:text-white ml-1"><BiPlusCircle/></button>
    <button onClick={funcionDel} className="text-2xl bg-violet-300 hover:bg-violet-800 hover:text-white ml-1"><BiTrashAlt/></button>
    </div>
    )
}