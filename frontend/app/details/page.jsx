'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../CartContext';

export default function DetailPage() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const router = useRouter();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('http://localhost:5001/api/auth/me', {
        credentials: 'include',
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        router.push('/login');
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch('http://localhost:5001/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    router.push('/login');
  };
  const handleAddToCart = () => {
    if (count === 0) return;
    addToCart({
      name: 'Colombia - Gesha Dream 250gr',
      price: 95,
      quantity: count,
    });
    // setCount(0); // 초기화
  };
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <div className='shop' style={{ height: 'unset' }}>
        <div className='menu cont-center'>
          <ul className='nav-left'>
            <li>
              <a href='/dashboard'>HOME</a>
            </li>
            <li>
              <a href='/shop'>SHOP</a>
            </li>
            <li>
              <a href='/dashboard'>CONTACT</a>
            </li>
            <li>
              <a href='/aboutUs'>ABOUT US</a>
            </li>
          </ul>
          <div className='nav-right'>
            <button onClick={() => router.push('/login')}>
              <img src='/login.svg' alt='login' />
            </button>
            <button onClick={() => router.push('/cart')}>
              <img src='/cart.svg' alt='cart' />
            </button>
            <button onClick={handleLogout} className='long primary'>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className='detail-page cont-center'>
        <img src='/coffee.png' alt='coffee' />
        <div>
          <div>
            <p
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '20px',
              }}
            >
              Colombia - Gesha Dream 250gr
            </p>
            <p style={{ marginBottom: '20px' }}>Regular price Dhs. 95.00 AED</p>
            <ul>
              <li>Profile: Floral aroma, blueberry tea</li>
              <li>Varietal: Green Tip Gesha</li>
              <li>Process: Carbonic Maceration</li>
              <li>Alt.: 1500masl</li>
              <li>Roast Profile: Espresso</li>
              <li>SCA Score: 89</li>
              <li>Farm: El Vergel State - Tolima</li>
            </ul>
          </div>
          <div className='quantity-control'>
            <button
              onClick={() => setCount(count > 0 ? count - 1 : 0)}
              disabled={count === 0}
            >
              -
            </button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button className='long primary' onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className='footer'>
        <div>
          <p>About us</p>
          <ul>
            <li>
              <a href='/'>Our Story</a>
            </li>
            <li>
              <a href='/'>Our Services</a>
            </li>
            <li>
              <a href='/'>Vacancies</a>
            </li>
            <li>
              <a href='/'>Partner Interviews</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Support</p>
          <ul>
            <li>
              <a href='/'>Contact Us</a>
            </li>
            <li>
              <a href='/'>FAQs</a>
            </li>
            <li>
              <a href='/'>Where to buy</a>
            </li>
            <li>
              <a href='/'>Shipping & Returns</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
