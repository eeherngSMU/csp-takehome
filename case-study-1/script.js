const UserComponent = () => {
    const [user, setUser] = React.useState({ name: 'John', age: 25 });
      
      const updateAge = () => {
        // user.age = 26
        setUser((user) => ({
            ...user,
            age: 26,
        }))
      };
    
      return (
        <div>
          <h1>User Info</h1>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <button onClick={updateAge}>Update Age</button>
        </div>
      );
    };
    
    ReactDOM.render(<UserComponent />, document.getElementById('root'));