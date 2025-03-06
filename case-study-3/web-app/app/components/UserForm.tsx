'use client';

import { useState } from 'react';

interface User {
  id: number;
  name: string;
}

export default function UserForm() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
  ]);

  const [newUser, setNewUser] = useState({
    name: '',
  });

  const updateUser = (id: number, p0: string, value: string) => {
    setUsers((users) => users.map(
      (user) => {
          if(user.id === id) {
              return {
                  ...user,
                  [p0]: value,
              }
          }
           else {
              return user;
          }
      }

    ))
  };

  const addUser = () => {
    setUsers((users) => [
      ...users,
      { 
        id: Math.max(...users.map((user) => user.id)) + 1,
        name: newUser.name
      }
    ]);
    setNewUser({name: ''});

    };

  const deleteUser = (id:number) => {
    setUsers((users) => users.filter(user => user.id != id))
  }
    
  

  return (
    <div className='flex flex-col m-[15px] text-[12px] font-sans'>
      <div className='flex flex-col mb-[20px]'>
        <div>
          <h3>Name</h3>
        </div>
        <div className='space-x-2'>
        <input 
          className='border rounded-sm p-1'
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="New user name"
        />
        <button 
        className='border rounded-sm p-1 bg-[#7CB9E8]'
        onClick={addUser}>Add</button>
        </div>
      </div>

      <h3 className='mb-[10px]'>List of Users</h3>
      <div>
        {users.map((user) => (
          <div
           key={user.id}>
            <input
              className='border rounded-sm p-1 text-center mb-2'
              type="text"
              value={user.name}
              onChange={(e) => updateUser(user.id, 'name', e.target.value)}
              
            />
            <button
              className='ml-2 border rounded-sm p-1 bg-red-300'
              onClick={() => deleteUser(user.id)}
            >Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}