'use client';
import { useCart } from '../../CartContext';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const handleLogout = async () => {
    await fetch('http://localhost:5001/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    router.push('/login');
  };
  return (
    <div className='cart-page'>
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
      <div
        className='cont-center'
        style={{
          flexDirection: 'column',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {item.name} - {item.quantity} x {item.price} AED
                <button
                  className='long primary'
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
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
