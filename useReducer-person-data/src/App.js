import './App.css';
import PersonForm from './components/PersonForm';
import PersonView from './components/PersonView';
import PersonState from './context/PersonState';

function App() {

  return (
    <PersonState>
      <div className="App">
        <h1> useReducer Rerson Data</h1>
        <PersonForm />
        <PersonView />
      </div>
    </PersonState>
  );
}

export default App;
