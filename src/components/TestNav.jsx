import AnchorLink from "react-anchor-link-smooth-scroll";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useState,useEffect } from 'react';

export default function App() {

    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 650) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
      useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })
    
  return (
      <Navbar collapseOnSelect expand='md' fixed='top' variant="dark" className={navbar ? 'bg-main' : 'bg-transparent'}>
          <Container>
                <AnchorLink href='#home' style={{textDecoration:'none'}}>
                    <Navbar.Brand className='fs-3'>Atayev</Navbar.Brand>
                </AnchorLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto text-white">
                    <AnchorLink href='#home'>
                    <Nav.Link className='text-white active'>Home</Nav.Link>
                    </AnchorLink>
                    <AnchorLink href='#about'>
                    <Nav.Link className='text-white'>About</Nav.Link>
                    </AnchorLink>
                    <AnchorLink href='#portfolio'>
                    <Nav.Link className='text-white'>Portfolio</Nav.Link>
                    </AnchorLink>
                    <AnchorLink href='#contact'>
                    <Nav.Link className='text-white'>Contact</Nav.Link>
                    </AnchorLink>
                </Nav>
                    </Navbar.Collapse>
              </Container>
    </Navbar>
  );
}
