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
    <div className='home'>
      <div className='menu cont-center'>
        <ul className='nav-left'>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='/shop'>SHOP</a>
          </li>
          <li>
            <a href='/'>CONTACT</a>
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
      <div className='hero'>
        <h1 className='hero-title'>
          PACO <br></br>COFFEE CO.
        </h1>
      </div>
      <div className='best-sellers cont-center'>
        <div className='best-sellers-text'>
          <h3>
            BEST<br></br> SELLERS
          </h3>
          <div>
            <p>
              Choose from our variety of coffees, roasted for both filter and
              espresso. We put the quality score right on the front label, so
              that you can see it and make an informed choice.
            </p>
            <a href='/shop' className='ex-link'>
              Shop Now <img src='/arrow_right.svg' alt='arrow_right' />
            </a>
          </div>
        </div>
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
          </ul>
        </div>
      </div>
      <div className='about'>
        <div className='content'>
          <p className='section-title'>about us</p>
          <div>
            <p className='paco'>paco</p>
            <p>
              Paco Coffee is a Dubai-based company founded in 2020 that sources,
              supplies, and roasts specialty coffee to provide a premium coffee
              experience to the Middle East and beyond. The company prides
              itself on its exceptional quality and attention to detail in
              selecting and bringing the best quality coffee.
            </p>
            <a href='/about' className='ex-link'>
              Read more <img src='/arrow_right_white.svg' alt='arrow_right' />
            </a>
          </div>
        </div>
      </div>
      <div className='ability cont-center'>
        <div className='flex'>
          <div>
            <p className='factor'>quality</p>
            <p className='description'>
              As Harvester, We are committed to selecting and bringing the
              coffee of the best quality. We carefully select lots that conform
              to the standards of speciality coffee, meaning that only the
              mature cherries are handpicked and that the lots are completely
              traceable.
            </p>
          </div>
          <div>
            <p className='factor'>Transparency</p>
            <p className='description'>
              What we and our customers appreciate a lot about speciality coffee
              are its full traceability and the short supply chain. We are
              committed to providing you with the most comprehensive information
              on what is in your cup: in fact, we publish all the details we
              ourselves have on each lot.
            </p>
          </div>
          <div>
            <p className='factor'>Honesty</p>
            <p className='description'>
              Assigning quality scores professionally after blind cupping the
              lots. Freshly processed beans at the origin are quite different
              from beans landed several months later at the destination:
              conditions of transportation and time inevitably intervene.
            </p>
          </div>
        </div>
        <img src='./ability.png' alt='ability' />
      </div>
      <div className='wholesale'>
        <div className='cont-center'>
          <div className='wholesale-text'>
            <div>
              <p className='section-title'>
                wholesale <br />
                coffee
              </p>
              <p>
                We are a full-service speciality coffee roaster. We go beyond
                indicating the location of the production: we also tell you
                everything we know about the producer - the farm, the
                cooperative, or the processing station. In addition, we always
                indicate the period of the harvest, so that you are sure that
                you buy the coffee coming from the freshest and in-season crop.
                We put the quality score right on the front label, so that you
                can see it and make an informed choice.
              </p>
            </div>
            <a href='/shop' className='ex-link'>
              Read more <img src='/arrow_right_white.svg' alt='arrow_right' />
            </a>
          </div>
          <img src='./wholesale.png' alt='wholesale' />
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
