import React from "react";
import Card from "react-bootstrap/Card";

function Main() {
  return (
    <>
      <div className="flex flex-col justify-center p-5 text-center">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolores expedita accusamus, voluptatum
          dignissimos illum at. In dolores culpa ipsam modi quisquam magnam ea reiciendis, iusto eum cum. Quis, quidem!
        </h1>
      </div>
      <h1 className="flex font-['FinkHeavy'] justify-center p-3 text-4xl">Today's Birthday</h1>
      <div className="flex flex-row content-center justify-center align-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={require("../assets/paw.png")} />
          <Card.Body>
            <Card.Title className="text-2xl font-['FinkHeavy']">Cyrano</Card.Title>
            <Card.Text>
              <h1 className="font-bold">Personality: <span className="font-light">Cranky</span></h1>
              <h1 className="font-bold">Species: <span className="font-light">Anteater</span></h1>
              <h1 className="font-bold">Gender: <span className="font-light">Male</span></h1>
              <h1 className="font-bold">Hobby: <span className="font-light">Education</span></h1>
              <h1 className="font-bold">Saying: <span className="font-light">"Don't punch your nose to spite your face."</span></h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Main;
