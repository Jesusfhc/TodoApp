import "./TodoItem.css"

function TodoItem(props) {
    return (
      <li>
        <span>&#10003;</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
}

export { TodoItem };