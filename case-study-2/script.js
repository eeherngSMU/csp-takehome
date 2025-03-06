const UserList = () => {
    const [users, setUsers] = React.useState([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]);
    
    const updateUser = (id, newName) => {
      setUsers((users) => users.map(
        (user) => {
            if(user.id === id) {
                return {
                    ...user,
                    name: newName,
                }
            } else {
                return user;
            }
        }

      ))
    };
   
    return (
      <div>
        <h1>Users</h1>
        {users.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <input 
              value={user.name}
              onChange={(e) => updateUser(user.id, e.target.value)}
              placeholder="New name"
            />
          </div>
        ))}
      </div>
    );
   };
   
   ReactDOM.render(<UserList />, document.getElementById('root'));