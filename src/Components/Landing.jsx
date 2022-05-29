import React from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import Video from "./Video"

function Landing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-5 text-center font-finkHeavy">
        <h1 className="text-teal-400 text-7xl">acnh wiki</h1>
        <h6 className="text-2xl text-teal-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          consequatur esse facere!
        </h6>
      </div>
      <hr className="m-auto w-75" />
      <br />
      <Navigation />
      <Main />
      <Video/>
    </>
  );
}

export default Landing;
