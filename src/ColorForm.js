//form that gives names of colors, tracked by useState
import React, { useState } from 'react'

function ColorForm(props) {
    //not sure if this has anything to do with the color variable in App.js
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        //eliminate default behavior of form submittal
        e.preventDefault()
        //make addColor available to props
        //uses "input" argument from the variable array above
        props.addColor(input)
    }

    return (
        <div>
            {/*onSubmit, another react function */}
            <form onSubmit={handleSubmit}>
                <input type="text"
                    //onChange is a react function for event listeners.
                    //It will listen for a change in the value of... something. 
                    onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm