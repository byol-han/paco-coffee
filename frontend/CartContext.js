'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 앱 시작 시 백엔드에서 장바구니 불러오기
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/cart', {
          method: 'GET',
          credentials: 'include',
        });
        if (res.ok) {
          const data = await res.json();
          setCart(data.items || []);
        }
      } catch (err) {
        console.error('Failed to fetch cart:', err);
      }
    };
    fetchCart();
  }, []);

  // 장바구니 업데이트
  const addToCart = async (item) => {
    try {
      const res = await fetch('http://localhost:5001/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(item),
      });
      if (res.ok) {
        const data = await res.json();
        setCart(data.items);
      }
    } catch (err) {
      console.error('Add to cart failed:', err);
    }
  };

  const clearCart = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/cart', {
        method: 'DELETE',
        credentials: 'include',
      });
      if (res.ok) setCart([]);
    } catch (err) {
      console.error('Clear cart failed:', err);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await fetch(`http://localhost:5001/api/cart/${productId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setCart(data.items || []);
      }
    } catch (err) {
      console.error('Remove from cart failed:', err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
