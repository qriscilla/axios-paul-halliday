import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import PersonDelete from './components/PersonDelete';

function App() {
  return (
    <div className="App">
      <PersonAdd />
      <PersonDelete />
      <PersonList />
    </div>
  );
}

export default App;
