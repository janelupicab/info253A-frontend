// App.js

// Imports for all our components
import React, { useState, useEffect, useContext, createContext } from "react";
import NavBar from "./NavBar/NavBar";
import RightList from "./RightList/InboxRightList";
import LeftFolders from "./LeftFolders/LeftFolders";
import Pages from "./Pages";
import style from "./style.css";
import { Routes, Route } from "react-router-dom";
import {
    Home,
    Inbox,
    Today,
    Upcoming,
 } from "./Pages";

export const ItemContext = createContext();

function App () {
   // Declaring  three states
   const [inbox, setInbox] = useState([
    {id: 900, title: "test", status: false},
    {id: 999, title: "test2", status: false}
  ]);
   const [today, setToday] = useState([
    {id: 900, title: "todaytest", status: false},
    {id: 999, title: "today2", status: false}
  ]);
   const [upcoming, setUpcoming] = useState([
    {id: 900, title: "upcoming1", status: false},
    {id: 999, title: "upcoming2", status: false}
  ]);
   const [temp, setTemp] = useState("");
   const [showLeft, setShowLeft] = useState(true); 


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
        setTemp,
        showLeft,
        setShowLeft
      }}
    >

      <div class="grid-container">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/inbox"
        element={<Inbox />}
      />
      <Route
        path="/today"
        element={<Today />}/> 
      <Route
        path="/upcoming"
        element={<Upcoming />}/>
    </Routes>

      {/* <RightList /> */}
      <LeftFolders/> 
      </div>
    </ItemContext.Provider>
    </>
  )
}

export default App;