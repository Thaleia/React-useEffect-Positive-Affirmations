import React, { useState, useEffect } from "react";

const Affirmation = ({ randomMax }) => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * randomMax) + 1
  );
  const [affirmation, setAffirmation] = useState();

  useEffect(() => {
    switch (randomNumber) {
        case 1:
          setAffirmation("I am in the right place at the right time, doing the right thing.");
          break;
        case 2:
          setAffirmation("I am loved just for being who I am, just for existing.");
          break;
        case 3:
          setAffirmation("Courage starts with showing up and letting myself be seen.");
          break;
        case 4:
          setAffirmation("The chance to love and be loved exists no matter where I am.");
          break;
        case 5:
          setAffirmation("I am good enough!");
          break;
        case 6:
          setAffirmation("This is a perfect moment.");
          break;
        case 7:
          setAffirmation("My life is about to be incredible!");
          break;
        case 8:
          setAffirmation("My perspective is unique. It's important and it counts.");
          break;
        case 9:
          setAffirmation("Every day above Earth is a good day.");
          break;
        case 10:
          setAffirmation("The secret of attraction is to love yourself");
          break;
        default:
          setAffirmation("I am the greatest. I said that even before I knew I was.");
      }
  }, [randomNumber]);

  const generateRandomAffirmation = () => {
    const newRandomNumber = Math.floor(Math.random() * randomMax) + 1;
    console.log("New random number:", newRandomNumber);
    setRandomNumber(newRandomNumber);
  };

  return (
    <div className="greeting">
      <h1>My Affirmations</h1>
      <h2 className="message">{affirmation}</h2>
      <button onClick={generateRandomAffirmation}>New Affirmation</button>
    </div>
  );
};

export default Affirmation;


