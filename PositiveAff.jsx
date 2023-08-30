import React, { useState, useEffect } from "react";
// inside the arrow function there are:
const Affirmation = ({ randomMax }) => {
  // a useState to randomize a number
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * randomMax) + 1);
  console.log("Refresh random number:", randomNumber);
  // a useState for each affirmation
  const [affirmation, setAffirmation] = useState('');

  useEffect(() => {
    switch (randomNumber) {
        case 1:
          setAffirmation("When I forgive myself, I free myself!");
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
          setAffirmation("I am still learning so it’s okay to make mistakes.");
          break;
        case 7:
          setAffirmation("I invite abundance and a generous heart.");
          break;
        case 8:
          setAffirmation("My perspective is unique. It's important and it counts.");
          break;
        case 9:
          setAffirmation("I am loved and worthy!");
          break;
        case 10:
          setAffirmation("I strive for joy, not for perfection.");
          break;
        default:
          setAffirmation("There is growth in stillness.");
      }
  }, [randomNumber]); // <- it renders the affirmation side-effect once
// arrow function for button. Uses newRadomNumber const in existing useState setRandomNumber

  const generateRandomAffirmation = () => {
    const newRandomNumber = Math.floor(Math.random() * randomMax) + 1;
    console.log("New random number from button:", newRandomNumber);
    setRandomNumber(newRandomNumber);
  };

  return (
    <>
    <div className="affirmation">
      <h2>{affirmation}</h2>
    </div>
    <button onClick={generateRandomAffirmation}>New Affirmation</button>
    </>
  );
};

export default Affirmation;


