import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <div className="flex content-center self-center justify-center align-center">
      <Navbar>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-full px-10 space-x-20 font-['FinkHeavy']">
              <Nav.Link className="hover:opacity-75 transition-opacity">
                <img src={require("../assets/paw.png")} alt="paw" />
                <Link to="/">Home</Link>
              </Nav.Link>
              <NavDropdown
                className="hover:opacity-75 transition-opacity"
                title={
                  <>
                    {" "}
                    <img src={require("../assets/paw.png")} alt="paw" />
                    <p>Characters</p>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/npc">NPC's</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/villagers">Villagers</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="hover:opacity-75 transition-opacity"
                title={
                  <>
                    {" "}
                    <img src={require("../assets/paw.png")} alt="paw" /> <p>Museum</p>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="">Bugs</NavDropdown.Item>
                <NavDropdown.Item href="">Fish</NavDropdown.Item>
                <NavDropdown.Item href="">Sea Creatures</NavDropdown.Item>
                <NavDropdown.Item href="">Fossils</NavDropdown.Item>
                <NavDropdown.Item href="">Art</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="hover:opacity-75 transition-opacity" >
                <img src={require("../assets/paw.png")} alt="paw" />
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
