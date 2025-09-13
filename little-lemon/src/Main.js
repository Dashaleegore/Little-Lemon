import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';

function Main() {
  return (
    <main role="main">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Specials />
            <Testimonials />
          </>
        } />
        <Route path="/booking" element={<p>This is the booking page.</p>} />
        {/* Add more routes as needed */}
      </Routes>
    </main>
  );
}

export default Main;
