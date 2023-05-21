

// import { useState } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import "./Navbar.css"

// export default function CustomNavbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="container">
//       <Navbar bg="body-tertiary" expand="lg" className="musskart-navbar fixed-top container ">
//         <Navbar.Brand href="#">Musskart</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarNav" onClick={toggleMenu} />
//         <Navbar.Collapse id="navbarNav" className={`${isMenuOpen ? 'show' : ''}`}>
//           <Nav className="ml-auto justify-content-end">
//             <ScrollLink
//               to="home"
//               smooth={true}
//               duration={500}
//               offset={-70}
//               spy={true}
//               exact="true"
//               activeClass="active"
//               className="nav-link"
//             >
//               Home
//             </ScrollLink>
//             <ScrollLink
//               to="services"
//               smooth={true}
//               duration={500}
//               offset={-70}
//               spy={true}
//               exact="true"
//               activeClass="active"
//               className="nav-link"
//             >
//               Services
//             </ScrollLink>
//             <ScrollLink
//               to="about"
//               smooth={true}
//               duration={500}
//               offset={-70}
//               spy={true}
//               exact="true"
//               activeClass="active"
//               className="nav-link"
//             >
//               About Us
//             </ScrollLink>
//             <ScrollLink
//               to="contact"
//               smooth={true}
//               duration={500}
//               offset={-70}
//               spy={true}
//               exact="true"
//               activeClass="active"
//               className="nav-link"
//             >
//               Contact Us
//             </ScrollLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }



import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import "./Navbar.css"

export default function CustomNavbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container fixed-top bg-light">
      <Navbar bg="body-tertiary" expand="lg" className={`musskart-navbar ${isMenuOpen ? 'sticky' : ''}`}>
        <Navbar.Brand href="#" className='Mus_brand'>Musskart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={toggleMenu} />
        <Navbar.Collapse id="navbarNav" className={`${isMenuOpen ? 'show' : ''}`}>
          <Nav className="ml-auto justify-content-end align-items-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
              className="nav-link"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
              className="nav-link"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
              className="nav-link"
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
              className="nav-link"
            >
              Contact Us
            </ScrollLink>

            <ScrollLink
              to="solution"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
              className="nav-link"
            >
              Solution
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
