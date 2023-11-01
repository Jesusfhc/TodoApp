import "./TodoCounter.css";

function TodoCounter({total, completed}) {
    
    return (

        total === completed ?

            <h1 className="TodoCounter">Has Encontrado el One Piece</h1>

        :
        
        <h1 className="TodoCounter">
            Has completado <span>{completed}</span> tareas de <span>{total}</span>
        </h1>
    )
}

export { TodoCounter }