import "./TodoItem.css"

function TodoItem(props) {


    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : null}`}
        onClick={props.onComplete}>&#10003;</span>
        <p className={`TodoItem-p ${props.completed ? "TodoItem-p--complete" : null}`}>{props.text}</p>
        <span className="Icon Icon-delete" onClick={props.onDelete}>X</span>
      </li>
    );
}

export { TodoItem };