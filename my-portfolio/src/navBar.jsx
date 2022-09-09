import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function PortfolioNavbar() {
    return (
        <Navbar bg="light" expand="none">
            <Container>
                <Navbar.Brand href="#home">Othman Adi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#repositories">Repositories</Nav.Link>
                        <Nav.Link href="#lessonsPage">Lessons</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PortfolioNavbar;