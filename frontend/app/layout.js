'use client';
import { CartProvider } from '../CartContext';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './style.scss';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
