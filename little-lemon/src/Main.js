import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <main role="main">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/reservations" element={<p>Reservations page coming soon.</p>} />
        <Route path="/order-online" element={<p>Order Online page coming soon.</p>} />
        <Route path="/login" element={<p>Login page coming soon.</p>} />
        <Route path="/booking" element={<p>This is the booking page.</p>} />
        {/* Add more routes as needed */}
      </Routes>
    </main>
  );
}

export default Main;
