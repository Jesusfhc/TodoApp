import "./TodoCounter.css";

function TodoCounter({total, completed}) {
    return (
        <h1>
            Has completado {completed} tareas de {total}
        </h1>
    )
}

export { TodoCounter }