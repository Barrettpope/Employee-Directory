import React from "react";

function Search({
    handleSearch
}) {
    return < >
    <
    div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        input type = "text"
    name = "search"
    placeholder = "Search"
    onChange = {
            handleSearch
        } > < /input> <
        /div> <
        /div> <
        /div> <
        />
}

export default Search