import React from 'react';
import Image from 'next/image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import paw from '../public/paw.png';

function Navigation() {
  return (
    <>
      <div className='block'>
        <Nav
          className='pb-5 text-2xl font-fink space-x-12 justify-content-center'
          activeKey='/home'
        >
          <Nav.Item>
            <Nav.Link
              className='text-white hover:opacity-75 transition-opacity'
              href='/'
            >
              <Image src={paw} alt='paw' width={20} height={20} />
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown
              title={
                <div className='text-white hover:opacity-75 transition-opacity'>
                  <Image src={paw} alt='paw' width={20} height={20} />
                  Characters
                </div>
              }
            >
              <NavDropdown.Item className='text-2xl' href='/npcs'>
                NPC's
              </NavDropdown.Item>
              <NavDropdown.Item className='text-2xl' href='/villagers'>
                Villagers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown
              title={
                <div className='text-white hover:opacity-75 transition-opacity'>
                  <Image src={paw} alt='paw' width={20} height={20} />
                  Museum
                </div>
              }
            >
              <NavDropdown.Item className='text-2xl' href='/bugs'>
                Bugs
              </NavDropdown.Item>
              <NavDropdown.Item className='text-2xl' href='/fish'>
                Fish
              </NavDropdown.Item>
              <NavDropdown.Item className='text-2xl' href='/seaCreatures'>
                Sea Creatures
              </NavDropdown.Item>
              <NavDropdown.Item className='text-2xl' href='/fossils'>
                Fossils
              </NavDropdown.Item>
              <NavDropdown.Item className='text-2xl' href='/art'>
                Art
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className='text-white hover:opacity-75 transition-opacity'
              href='/about'
            >
              <Image src={paw} alt='paw' width={20} height={20} />
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default Navigation;
