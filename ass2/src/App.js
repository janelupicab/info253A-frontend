// App.js

// Imports for all our components
import React, { useState, useEffect, useContext, createContext } from "react";
import NavBar from "./NavBar/NavBar";
import RightList from "./RightList/RightList";
import LeftFolders from "./LeftFolders/LeftFolders";
import style from "./style.css";

export const ItemContext = createContext();

function App () {
   // Declaring  three states
   const [inbox, setInbox] = useState([
    {id: 900, title: "test", status: false},
    {id: 999, title: "test2", status: true}
  ]);
   const [today, setToday] = useState(["test2"]);
   const [upcoming, setUpcoming] = useState(["test3"]);
   const [temp, setTemp] = useState("");


  return (
    <>
    <ItemContext.Provider
      value={{
        inbox,
        setInbox,
        today,
        setToday,
        upcoming,
        setUpcoming,
        temp,
        setTemp
      }}
    >
      <div class="grid-container">
      <NavBar />
      <RightList />
      <LeftFolders />
      </div>
    </ItemContext.Provider>
    </>
  )
}

export default App;