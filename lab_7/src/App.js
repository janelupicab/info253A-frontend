import React, { useState, useEffect, useContext, createContext } from "react";
import Landing from './myComponent/Landing';


export const ItemContext = createContext(); 

function App() {
  const [hobbies, setHobbies] = useState(["I am level 38 and counting!"]);
  
  const getHobbies = async() => {
      if (hobbies.length < 3){
        hobbies.push("i  am on team valor");
        hobbies.push("add me! my trainer code is: 0126 9490 6285");
      }
      return hobbies
    }
    
      useEffect(() => {
        if (hobbies.length < 3){
          getHobbies().then((hobbies) => {
          setHobbies(hobbies);
          });
        }
      });
    
      getHobbies();

  return (
    <>
    <ItemContext.Provider
      value={{
        hobbies,
        setHobbies
      }}
    >
      <div>
        <Landing />
      </div>
    </ItemContext.Provider>
    </>
  )
}

export default App;
