import React, { useState } from 'react';
import Form from './components/Form';
import Box from './components/box';
    
    
// imports removed for brevity
function App() {

  const [box, setBox] = useState([]);

  const [boxSize, setBoxSize] = useState({
    color: "",
    size: "",
  })

  return (
    <div className="App">
      <Form
        boxSize={boxSize}
        setBoxSize={setBoxSize}
        box = {box}
        setBox={setBox}
      />
      {
        box.map(box => <Box color={box.color} size={box.size}/>)
      }
    </div>
  );
}

export default App;

