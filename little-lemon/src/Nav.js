import { Link } from 'react-router-dom';
import logo from './assets/images/Logo .svg';

function Nav() {
  return (
    <nav aria-label="Main navigation" role="navigation" style={{ width: "100%" }}>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: '0',
          padding: 0,
          margin: 0,
          width: '100%'
        }}
        role="menubar"
      >
        <li>
          <img src={logo} alt="Little Lemon Logo" style={{ height: '40px' }} />
        </li>
        <li><Link to="/" role="menuitem">HOME</Link></li>
        <li><Link to="/about" role="menuitem">ABOUT</Link></li>
        <li><Link to="/menu" role="menuitem">MENU</Link></li>
        <li><Link to="/reservations" role="menuitem">RESERVATIONS</Link></li>
        <li><Link to="/order-online" role="menuitem">ORDER ONLINE</Link></li>
        <li><Link to="/login" role="menuitem">LOGIN</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
