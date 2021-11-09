
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Form from './components/form';
import { useState } from 'react';
import Result from './components/Results';

function App() {
  const [myIdea, setMyIdea] = useState([]);

  const addMyIdea = (idea) => {
    setMyIdea([...myIdea, idea]);
  }


  const changeStyleStatus = idx => {
    console.log("show Index",idx)
    const ideaToUpdate = myIdea[idx];
    ideaToUpdate.completed = !ideaToUpdate.completed;
    setMyIdea([...myIdea])
  }
const updateIdeas = idx => {
  
  setMyIdea([...myIdea.slice(0,idx).concat(...myIdea.slice(idx+1))])
}

  return (
    <div className="container row">
      <Form onSubmitIdea={addMyIdea}></Form>
      <Result myIdea={myIdea} updateStyle={changeStyleStatus} setMyIdea={updateIdeas}/>
    </div>
  );
}

export default App;
