import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <>
      <Nav
        className="pb-5 font-['FinkHeavy'] space-x-12 justify-content-center"
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link
            className="text-white hover:opacity-75 transition-opacity"
            href="/"
          >
            <img src={require("../assets/paw.png")} alt="paw" />
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown
            title={
              <div className="text-white hover:opacity-75 transition-opacity">
                <img src={require("../assets/paw.png")} alt="paw" />
                Characters
              </div>
            }
          >
            <NavDropdown.Item href="/npcs">NPC's</NavDropdown.Item>
            <NavDropdown.Item href="/villagers">Villagers</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown
            title={
              <div className="text-white hover:opacity-75 transition-opacity">
                <img src={require("../assets/paw.png")} alt="paw" />
                Museum
              </div>
            }
          >
            <NavDropdown.Item href="/bugs">Bugs</NavDropdown.Item>
            <NavDropdown.Item href="/fish">Fish</NavDropdown.Item>
            <NavDropdown.Item href="/seaCreatures">
              Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href="/fossils">Fossils</NavDropdown.Item>
            <NavDropdown.Item href="/art">Art</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="text-white hover:opacity-75 transition-opacity"
            href="/about"
          >
            <img src={require("../assets/paw.png")} alt="paw" />
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navigation;
