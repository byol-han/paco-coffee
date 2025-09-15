'use client';
import { useState } from 'react';

export default function AdminProductForm() {
  const [form, setForm] = useState({
    name: '',
    process: '',
    aroma: '',
    amount: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { ...form, price: Number(form.price) }; // ✅ 숫자로 변환
    await fetch('http://localhost:5001/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
      credentials: 'include',
    });
    alert('Product saved!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' onChange={handleChange} />
        <input name='process' placeholder='Process' onChange={handleChange} />
        <input name='aroma' placeholder='Aroma' onChange={handleChange} />
        <input name='amount' placeholder='Amount' onChange={handleChange} />
        <input name='price' placeholder='Price' onChange={handleChange} />
        <input name='image' placeholder='Image URL' onChange={handleChange} />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
}
