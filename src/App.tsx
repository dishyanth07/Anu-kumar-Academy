import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Classes from './pages/Classes';
import Schedule from './pages/Schedule';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { EnquiryProvider } from './context/EnquiryContext';

export default function App() {
  return (
    <Router>
      <EnquiryProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </EnquiryProvider>
    </Router>
  );
}
