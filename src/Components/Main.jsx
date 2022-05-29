import React from "react";
import Card from "react-bootstrap/Card";
import "../index.css";

function Main() {
  return (
    <>
      <div className="text-white flex flex-col justify-center text-center">
        <h1 className="font-sans p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          dolores expedita accusamus, voluptatum dignissimos illum at. In
          dolores culpa ipsam modi quisquam magnam ea reiciendis, iusto eum cum.
          Quis, quidem!
        </h1>
      </div>
      <h1 className="text-white flex font-['FinkHeavy'] justify-center p-3 pt-5 text-4xl">
        Today's Birthday
      </h1>
      <div className="flex flex-row content-center justify-center align-center">
        <Card className="bruh">
          <Card.Img variant="top" src={require("../assets/paw.png")} />
          <Card.Body>
            <Card.Title className="text-2xl font-['FinkHeavy']">
              Cyrano
            </Card.Title>
            <Card.Text className="font-bold">
              Personality: <span className="font-light">Cranky</span>
              <br />
              Species: <span className="font-light">Anteater</span> <br />
              Gender: <span className="font-light">Male</span> <br />
              Hobby: <span className="font-light">Education</span> <br />
              Saying: <span className="font-light">"Don't punch your nose to spite your face."</span>
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Main;
