import './App.css';
import logo from './logo.png'
import mylogo from './mylogo.png'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <div className='back'>
        <img className='App-logo' src= { logo }  alt="logo"/>
        <h1>TO-DO LIST</h1>
        <ToDoList />
        <a href='https://lunacode.fr/' target="_blank" rel="noreferrer">
        <img className='myIcon' src={mylogo} alt="logo"/>
        </a>
        
      </div>
    </div>
  );
}



export default App;
