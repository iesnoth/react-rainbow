import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import './App.css';

function App() {
  //array is now a State value, which is expected to change
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  //mapping over colors to select the one the user has selected
  let colorMap = colors.map((color, i) => {
    return (
      //sending props to ColorBlock
      <ColorBlock key={i} color={color} />
    )
  })
   // using the spread operator to make a copy of the array without the data being strictly inside an array
   const addColor = (newColor) =>{
    setColors([...colors,newColor])
  }
  return (
    <div className="App">
      {/* returning the colorMap function, which is why it's in curly braces */}
      {colorMap}
      {/*passing ColorForm props to add colors to the colors array. This will concatenate the new color on the end. */}
      <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;
