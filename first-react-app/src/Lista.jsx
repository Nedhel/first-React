import {Item} from "./Item"

export function Lista({tareas, toggleStatus}){    
    return(
        <ul>
            {tareas.map(item=>(
                <Item key={item.id} tareas={item} toggleStatus={toggleStatus}/>
            ))}
        </ul>
    )
}