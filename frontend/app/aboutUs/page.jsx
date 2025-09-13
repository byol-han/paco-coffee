'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutUsPage() {
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
            <button onClick={() => router.push('')}>
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
          <p className='title'>ABOUT US</p>
          <p>
            Paco Coffee is a Dubai-based company founded in 2020 that sources,
            supplies, and roasts speciality coffee to provide a premium coffee
            experience to the Middle East and beyond. The company prides itself
            on its exceptional quality and attention to detail in selecting and
            bringing the best quality coffee. They are committed to promoting
            fair coffee harvesting practices and engaging the coffee community
            to contribute to the coffee value chain. With connections to farms
            around the world, they have a huge capacity to meet market demand
            and are working towards a greater impact.
          </p>
        </div>
      </div>
      <div className='cont-center'>
        <div className='aboutUs'>
          <img src='./img_aboutus.png' alt='aboutus' />
          <div>
            <p className='title'>PACO COFFEE CO.</p>
            <p>
              Welcome to Paco Coffee co, the premier coffee roastery in the
              heart of the city. As soon as you walk through the door, you'll be
              greeted with the delicious aroma of freshly roasted coffee beans.
              <br />
              <br />
              Our experienced roasters are experts at selecting the finest
              coffee beans from around the world and bringing out their unique
              flavors and aromas through our signature roasting process. We take
              pride in sourcing our beans directly from the farmers, ensuring
              that we are always using the freshest and most ethically sourced
              beans available.
              <br />
              <br />
              At Paco Coffee co, we believe that coffee is not just a drink,
              it's an experience. That's why we offer a variety of brewing
              methods, including pour-over, French press, and espresso, to
              ensure that each cup is crafted to perfection.
              <br />
              <br />
              Whether you're a coffee connoisseur or just starting to explore
              the world of specialty coffee, our knowledgeable staff is here to
              guide you on your coffee journey. So come on in, relax, and enjoy
              a cup of our expertly crafted coffee today!
            </p>
          </div>
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
