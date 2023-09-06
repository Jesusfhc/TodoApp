import React from "react";
import "./TodoSearch.css"

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('');


    return (
        <input placeholder="Calcular facturacion"
        className="TodoSearch" 
        value={searchValue}
        onChange={(event)=> {
                setSearchValue(event.target.value)
                console.log(event.target.value)
                
            }}
        />
    );
}

export {TodoSearch};