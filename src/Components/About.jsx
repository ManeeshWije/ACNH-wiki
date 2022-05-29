import React from 'react';
import Navigation from './Navigation';

function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-5 text-center font-finkHeavy">
        <h1 className="text-teal-400 text-7xl">About Us</h1>
        <h6 className="text-2xl text-teal-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur esse facere!
        </h6>
      </div>
      <hr className="m-auto w-75" />
      <br />
      <Navigation />
      <div className="flex flex-row justify-center text-center align-center">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis explicabo placeat animi vero doloremque sapiente sunt excepturi, molestiae non consequuntur aliquam, dolores, rem minus? Incidunt adipisci voluptates asperiores nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae ducimus dolor, unde, consequatur id quo dolore libero minima tenetur reprehenderit fugiat iure blanditiis alias, laborum distinctio dolorum vel eos!</h1>
      </div>
    </>
  );
}

export default About;
