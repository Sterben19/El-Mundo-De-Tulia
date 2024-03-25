import CartWidget from '../CartWidget/CartWidget'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import categories from '../../assets/categories.json'

function OffcanvasExample() {
  const thirdNavbar = [false, 'sm', 'md', 'lg', 'xl', 'xxl'][2]

  return (
    <>
      <Navbar
        key={thirdNavbar}
        expand={thirdNavbar}
        className="bg-rose h-[68px] shadow-sm z-20"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/logo.jpg"
              className="max-[767px]:h-12 max-[767px]:w-12 h-14 w-14 rounded-lg"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${thirdNavbar}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${thirdNavbar}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${thirdNavbar}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${thirdNavbar}`}
              >
                El Mundo De Tulia
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  title="Categorías"
                  id={`offcanvasNavbarDropdown-expand-${thirdNavbar}`}
                >
                  {categories.map((category) => (
                    <NavDropdown.Item
                      className="capitalize"
                      key={category.slug}
                      as={Link}
                      to={`/category/${category.slug}`}
                    >
                      {category.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
              <div className="max-[767px]:py-4 min-[767px]:my-auto mx-2">
                <CartWidget />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default OffcanvasExample
