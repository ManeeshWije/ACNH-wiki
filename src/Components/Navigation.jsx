import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <>
      <Nav className="font-['FinkHeavy'] space-x-12 justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="text-black hover:opacity-75 transition-opacity" href="/">
            <img src={require("../assets/paw.png")} alt="paw" />
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown
            title={
              <div className="hover:opacity-75 transition-opacity">
                <img src={require("../assets/paw.png")} alt="paw" />
                Characters
              </div>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/npcs">NPC's</NavDropdown.Item>
            <NavDropdown.Item href="/villagers">Villagers</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown
            title={
              <div className="hover:opacity-75 transition-opacity">
                <img src={require("../assets/paw.png")} alt="paw" />
                Museum
              </div>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/bugs">Bugs</NavDropdown.Item>
            <NavDropdown.Item href="/fish">Fish</NavDropdown.Item>
            <NavDropdown.Item href="/seaCreatures">Sea Creatures</NavDropdown.Item>
            <NavDropdown.Item href="/fossils">Fossils</NavDropdown.Item>
            <NavDropdown.Item href="/art">Art</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-black hover:opacity-75 transition-opacity" href="/about">
            <img src={require("../assets/paw.png")} alt="paw" />
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navigation;
