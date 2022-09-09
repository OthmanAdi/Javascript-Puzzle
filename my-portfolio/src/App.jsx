import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomNav from './navBar.jsx';
import Footer from './footer.jsx';

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <CustomNav />
        <Footer />
      </div>

      <div className="cardsContainer">
      </div>
    </div>
  );
}

export default App;
