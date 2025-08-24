'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

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

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <div className='shop'>
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
        <div className='hero-text'>
          <p className='title'>OUR PRODUCTS</p>
          <p>
            We source coffee from across the globe from our trusted network of
            suppliers to bring you a selection of high-quality coffees, each
            with own distinct flavour profile and story.
          </p>
        </div>
      </div>
      <div className='best-sellers cont-center'>
        <div className='best-sellers-text'></div>
        <div className='best-seller-products'>
          <ul>
            <li className='product-set'>
              <a href='/details'>
                <img src='/coffee.png' alt='coffee' />
                <div className='product-info'>
                  <p className='name'>Colombia - Gesha Dream</p>
                  <p>
                    Process: Carbonic Maceration <br />
                    Floral aroma, blueberry tea <br />
                  </p>
                  <p className='amount'>250gr</p>
                  <p className='price'>20 CAD</p>
                </div>
              </a>
            </li>
            <li className='product-set'>
              <a href='/details'>
                <img src='/coffee.png' alt='coffee' />
                <div className='product-info'>
                  <p className='name'>Colombia - Gesha Dream</p>
                  <p>
                    Process: Carbonic Maceration <br />
                    Floral aroma, blueberry tea <br />
                  </p>
                  <p className='amount'>250gr</p>
                  <p className='price'>20 CAD</p>
                </div>
              </a>
            </li>
            <li className='product-set'>
              <a href='/details'>
                <img src='/coffee.png' alt='coffee' />
                <div className='product-info'>
                  <p className='name'>Colombia - Gesha Dream</p>
                  <p>
                    Process: Carbonic Maceration <br />
                    Floral aroma, blueberry tea <br />
                  </p>
                  <p className='amount'>250gr</p>
                  <p className='price'>20 CAD</p>
                </div>
              </a>
            </li>
            <li className='product-set'>
              <a href='/details'>
                <img src='/coffee.png' alt='coffee' />
                <div className='product-info'>
                  <p className='name'>Colombia - Gesha Dream</p>
                  <p>
                    Process: Carbonic Maceration <br />
                    Floral aroma, blueberry tea <br />
                  </p>
                  <p className='amount'>250gr</p>
                  <p className='price'>20 CAD</p>
                </div>
              </a>
            </li>
          </ul>
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
