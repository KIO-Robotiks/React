import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import ToDoList from './components/ToDoList';
import CommentList from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div className="cube">
            <Message text='Dunkan' />
            <CurrentTime />
          </div>
          <div className="cubeNews">
            <EventCard name="OpenAir" date="12.04.2024" place="Berlin" />
            <EventCard name="OpenAir" date="13.04.2024" place="Berlin" />
            <EventCard name="OpenAir" date="14.04.2024" place="Berlin" propsBoolean="false" />
          </div>
          <div className="main">
            <div className="cubeNews">
              <Counter />
            </div>
            <div className="cubeNews">
              <TextInput/>
            </div>
            <div className="cubeNews">
              <ToDoList />
            </div>
            <div className="CommentList">
              <CommentList />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
