import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Home from './pages/Home';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer'
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

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
