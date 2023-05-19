
import './App.css';
import About from './Componentes/About';
import Home from './Componentes/Home';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Componentes/NavBar';
import "tailwindcss/tailwind.css";
import 'flowbite';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
      <Home/>
      </Route>
      <Route path="/About">
      <About/>
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
