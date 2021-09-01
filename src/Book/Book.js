import React from 'react';
import './Book.css'
function Book(props) {

    // const randomColor = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'aqua', 'bisque','salmon','seagreen','slategrey']
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    return (
        <div className="componentBlog" style={{
            background: "rgb(" +
                randomR + ","
                + randomG + ","
                + randomB + ")",
        }}>
            <div>
                <h3>Name: <strong>{props.name}</strong></h3>
                <p>Year: {props.year}</p>
                <input type="text" onChange={props.inputHandler} value={props.inputValue} />
                <button onClick={props.onChange}>Change title</button>
                <br />
                <br />
                <button onClick={props.onDelete}>Delete</button>
            </div>

        </div>
    )
}

export default Book