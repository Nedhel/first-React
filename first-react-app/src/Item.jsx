export function Item({tareas, toggleStatus}){
    const {id,tarea,completed}=tareas
    function handleChange(){
        toggleStatus(id)
    }
    return (
        <>
        <li id={id} className="text-white capitalize"><input type="checkbox" checked={completed} onChange={handleChange}></input>{tarea}</li>       
        </>
    )
}