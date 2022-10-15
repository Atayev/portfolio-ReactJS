
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState,useEffect } from 'react';
function Navb() {
  const [navbar,setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
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
      <>
        <Navbar fixed='top' expand='sm' variant="dark" className={navbar ? 'bg-main pt-3' : 'bg-transparent  pt-3'}>
        <Container>
            <AnchorLink href='#home' style={{textDecoration:'none'}}>
                <Navbar.Brand className='fs-3'>Atayev</Navbar.Brand>
            </AnchorLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-white">
            <AnchorLink href='#home' style={{textDecoration:'none'}}>
              <Nav.Link className='text-white' >Home</Nav.Link>
            </AnchorLink>
            <AnchorLink href='#about' style={{textDecoration:'none'}}>
            <Nav.Link className='text-white' >About</Nav.Link>
            </AnchorLink>
            <AnchorLink href='#portfolio' style={{textDecoration:'none'}}>
            <Nav.Link className='text-white' >Portfolio</Nav.Link>
            </AnchorLink>
            <AnchorLink href='#contact'  style={{textDecoration:'none'}}>
            <Nav.Link className='text-white hover'>Contact</Nav.Link>
            </AnchorLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
  )
}

export default Navb