// import logo from './logo.svg';
import './App.css';
import TemperatureConvert from './components/TemperatureConvert';
import ToDoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main'>
          <TemperatureConvert />
          <ToDoList />
        </div>
      </header>
    </div>
  );
}

export default App;
