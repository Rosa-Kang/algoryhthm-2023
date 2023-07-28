import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' exact element={<Services/>} />
          <Route path='/sign-up' exact element={<SignUp/>} />
          <Route path='/contact' exact element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
