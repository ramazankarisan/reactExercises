import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonState from './context/PersonState';
import NavbarComp from './components/Navbar';
import PersonList from './components/PersonList';

function App() {

  return (
    <PersonState>
      <NavbarComp />
      <PersonList />
    </PersonState>
  );
}

export default App;
