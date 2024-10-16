import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchUsers } from './redux/slices/usersSlice';
import { fetchUser } from './redux/slices/specificUserSlice';

function App() {
  const {users, loading, error} = useSelector((state) => state.users);
  const {user, loadingSpecificUser, errorSpecificUser} = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchUsers())
    }, [dispatch]
  )

  const handleClick = (userId) => {
    setUserId(userId);
    dispatch(fetchUser(userId));
  }
  return (
    <div classNameName="App">
      <h1>Users:</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users.length ? <ul>{
          users.map(user => (
            <details key={user.id} onClick={() => handleClick(user.id)}>
            <summary>{user.name}</summary>
            {loadingSpecificUser && <p>Loading...</p>}
            {errorSpecificUser && <p>Error {errorSpecificUser}</p>}
            {userId === user.id ?
              <div>
                <p>User: {user.username}</p>
                <p>e-mail: {user.email}</p>
              </div>
              : null
            }
          </details>
          ))
      }</ul> : null}
    </div>
  );
}

export default App;