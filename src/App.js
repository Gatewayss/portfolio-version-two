import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<About />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/resume"
              element={<Resume />}
            />
        </Routes>
        <Footer />
      </div>
    </div>
    </Router >
  );
}

export default App;
