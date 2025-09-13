import logo from './assets/images/Logo .svg';

function Nav() {
  return (
    <nav aria-label="Main navigation" role="navigation">
      <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '20px', padding: 0, margin: 0 }} role="menubar">
        <li>
          <img src={logo} alt="Little Lemon Logo" style={{ height: '40px' }} />
        </li>
        <li><a href="/home" role="menuitem">HOME</a></li>
        <li><a href="/about" role="menuitem">ABOUT</a></li>
        <li><a href="/menu" role="menuitem">MENU</a></li>
        <li><a href="/reservations" role="menuitem">RESERVATIONS</a></li>
        <li><a href="/order-online" role="menuitem">ORDER ONLINE</a></li>
        <li><a href="/login" role="menuitem">LOGIN</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
