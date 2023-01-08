import React from 'react';
import Image from 'next/image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import paw from '../public/paw.png';

export default function Navigation() {
  return (
    <>
      <Nav
        className='pb-5 text-2xl font-fink space-x-12 justify-content-center flex flex-row'
        activeKey='/home'
      >
        <Nav.Item>
          <Nav.Link
            className='text-white hover:opacity-75 transition-opacity'
            href='/'
          >
            <Image src={paw} alt='paw' width={60} height={60} />
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown
            title={
              <div className='text-white hover:opacity-75 transition-opacity'>
                <Image src={paw} alt='paw' width={60} height={60} />
                Characters
              </div>
            }
          >
            <NavDropdown.Item className='w-full' href='/npcs'>
              NPC&apos;s
            </NavDropdown.Item>
            <NavDropdown.Item className='w-full' href='/villagers'>
              Villagers
            </NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown
            title={
              <div className='text-white hover:opacity-75 transition-opacity'>
                <Image src={paw} alt='paw' width={60} height={60} />
                Museum
              </div>
            }
          >
            <NavDropdown.Item href='/bugs'>Bugs</NavDropdown.Item>
            <NavDropdown.Item href='/fish'>Fish</NavDropdown.Item>
            <NavDropdown.Item href='/seaCreatures'>
              Sea Creatures
            </NavDropdown.Item>
            <NavDropdown.Item href='/fossils'>Fossils</NavDropdown.Item>
            <NavDropdown.Item href='/art'>Art</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className='text-white hover:opacity-75 transition-opacity'
            href='/about'
          >
            <Image src={paw} alt='paw' width={60} height={60} />
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
