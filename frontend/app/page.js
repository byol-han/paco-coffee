'use client';

import { useEffect, useState } from 'react';
import { getUsers, createUser } from '../lib/api';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ email: '', password: '' });

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(form);
    const res = await getUsers();
    setUsers(res.data);
    setForm({ email: '', password: '' });
    alert('User created successfully!');
    window.location.href = '/login';
  };

  return (
    <main className='sign-up'>
      <h1>PACO COFFEE</h1>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <input
          placeholder='Email'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder='Password'
          type='password'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type='submit' className='long primary'>
          REGISTER
        </button>
      </form>
      {/* <ul>
       {users.map((u) => (
         <li key={u._id}>
           {u.email} - {u.password}
         </li>
       ))}
     </ul> */}
    </main>
  );
}
