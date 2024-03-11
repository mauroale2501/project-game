import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import "../styles/Nav.css";

function Nav() {
  return (
    <Navbar expand="lg" className="nav">
      <Container className="container">
        <Link to="/">
          <img src={logo} alt="logo-brand" className="logo-brand" />
        </Link>
        <Link to="/profile">
          <img src={logo} alt="logo-profile" className="logo-profile" />
        </Link>
        <Button>Log-in</Button>
      </Container>
      <hr />
    </Navbar>
  );
}

export default Nav;

// import logo from "../assets/react.svg";
// import { Link } from "react-router-dom";
// // import NavBar from "react-bootstrap/Navbar";
// import "./Nav.css";

// const Nav = () => {
//   return (
//     <>
//       <nav className="nav" style={{ backgroundColor: "#242424" }}>
//         <Link to="/">
//           <img className="logo" src={logo} alt="logo-brand" />
//         </Link>
//         <Link className="profile" to="/profile">
//           <img src={logo} alt="profile" />
//         </Link>
//       </nav>
//     </>
//   );
// };

// export default Nav;
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// const Nav: React.FC = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/" className="logo">
//           Logo
//         </Link>
//       </div>
//       <div className="navbar-right">
//         <Link to="/profile" className="profile-link">
//           <img
//             src="ruta-a-tu-imagen-de-perfil"
//             alt="Profile"
//             className="profile-image"
//           />
//         </Link>
//         <Link to="/login" className="login-button">
//           Login
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
