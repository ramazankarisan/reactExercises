
import { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import { AppContext } from './context'


function App() {

  const userList = [
    {
      id: 1,
      name: 'John',
      age: 26,
      bio: 'software devoloper',
    }
  ]
  const [users, setUsers] = useState(userList)

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'ADD_USER':
        setUsers([...users, payload.newUser])
        return;
      case 'REMOVE_USER':
        setUsers(users.filter(user => user.id !== payload.userId))
        return;
      default:
        return;
    }
  }
  return (
    <div className="App">
      <AppContext.Provider value={{ users, dispatchUserEvent }}>
        <AddUser />
        <UserList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
