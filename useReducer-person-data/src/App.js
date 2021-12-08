import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonForm from './components/PersonForm';
import PersonView from './components/PersonView';
import PersonState from './context/PersonState';
import NavbarComp from './components/Navbar';
import PersonList from './components/PersonList';

function App() {

  return (
    <PersonState>
      <NavbarComp />
      <PersonList />
      <PersonView />

    </PersonState>
  );
}

export default App;
