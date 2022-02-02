import React, {Component} from "react";


const count = {
    height: '200px',
    width: '100px',
    border: '2px solid red'
}

class ToDoApp extends React.Component {
    render() {
        return (
            <div app={count}></div>
        )
    }
}