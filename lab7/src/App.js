import React, { useState, useEffect, useContext, createContext } from "react";

export const ItemContext = createContext();

function App() {
    const [hobbies, setHobbies] = useState([
      "I am level 38 and counting!"
    ]);

    const getHobbies = async() => {
        hobbies.push("i  am on team valor");
        hobbies.push("add me! my trainer code is: 0126 9490 6285");
        return hobbies
      }
      
      useEffect(() => {
          getHobbies().then((hobbies) => {
          // setHobbies(hobbies.push("i  am on team valor"));
          // setHobbies(hobbies.push("add me! my trainer code is: 0126 9490 6285"));
          });
      });
      setHobbies();

  return (
    <>
    console.log({hobbies})
    <ItemContext.Provider value={{hobbies, setHobbies}}> 
    <div className="App">
      <header className="App-header">
        <p>
          Hi!
        </p>
      </header>
    </div>
    </ItemContext.Provider> 
    </>
  );
}

export default App;
