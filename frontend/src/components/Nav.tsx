import { Link, useNavigate } from "react-router-dom";
import { Navbar, Button, Container } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import login from "../assets/login.jpeg";
import "../styles/Nav.css";

type NavProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

const Nav = ({ isLoggedIn, onLogin, onLogout }: NavProps) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onLogin();
    navigate("/Home");
  };
  const handleLogoutClick = () => {
    onLogout();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav">
      <Container className="container">
        <Link to="/">
          <img
            src={logo}
            width="40"
            height="40"
            alt="logo-brand"
            className="logo-brand"
          />
        </Link>
        {isLoggedIn ? (
          <Link to="/profile">
            <img
              src={login}
              width="40"
              height="40"
              alt="logo-profile"
              className="logo-profile"
            />
          </Link>
        ) : null}
        <Button
          className="button-log"
          onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}
        >
          {isLoggedIn ? "Log-out" : "Log-in"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Nav;
