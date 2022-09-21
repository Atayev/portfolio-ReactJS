
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState,useEffect } from 'react';
function Navb() {
  const [navbar,setNavbar] = useState(false)
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
      <>
        <Navbar fixed='top'variant="dark" className={navbar ? 'bg-main' : 'bg-transparent'}>
        <Container>
        <AnchorLink href='#home' style={{textDecoration:'none'}}>
            <Navbar.Brand className='fs-3'>Atayev</Navbar.Brand>
        </AnchorLink>
          <Nav className="me-auto text-white">
            <AnchorLink href='#home'>
              <Nav.Link className='text-white'>Home</Nav.Link>
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
        </Container>
      </Navbar>
        </>
  )
}

export default Navb