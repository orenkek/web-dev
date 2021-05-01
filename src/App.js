import { useState } from 'react';
import './App.css';
import Keeps from "./Components/Keeps";
import LoginMenu from './Components/LoginMenu';

function App() {

  const [isLogged, setIsLogged] = useState(false)

  const SetIsLogged = () => {
    setIsLogged(!isLogged)
  }

  console.log(isLogged);
  return (
    <div className="App">
      {!isLogged && <LoginMenu SetIsLogged={() => SetIsLogged()}/>}
      {isLogged && <Keeps/>}
    </div>
  );
}

export default App;
