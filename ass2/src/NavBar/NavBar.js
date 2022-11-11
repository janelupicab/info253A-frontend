// src/TopNav/TopNav.js
import React, { useContext } from "react";
import {MdOutlineMenu, MdSearch, MdOutlineCheckCircleOutline} from "react-icons/md";
import { ItemContext } from "../App";
import {Route, Link, Routes, useLocation} from 'react-router-dom';


const NavBar = () => {

  const { inbox, setInbox, today, setToday, upcoming, setUpcoming } = useContext(ItemContext);
  
  const inboxIncompmlete = inbox.filter(task => task.status === false);
  const todayIncomplete = today.filter(task => task.status === false);
  const upcomingIncomplete = upcoming.filter(task => task.status === false);
  const allLen = inboxIncompmlete.length + todayIncomplete.length + upcomingIncomplete.length;
  
  
  const location = useLocation().pathname
  const thisLen = inbox.length  // depends on the state context, using inbox for now
  

  return (
    <>
     <div class="item1">
            <p>
            <span class="material-symbols-outlined"> <MdOutlineMenu/> </span>
            <section class = "searchIcon"> 
                <span class="material-symbols-outlined"> <MdSearch/></span>
                <input class = "searchField" type="text" placeholder="Quick Find"/>
            </section>
            </p>
        </div>
        <div class="item1a">
            <p>
            <section class ="rightHeader">
                <span class="material-symbols-outlined"> <MdOutlineCheckCircleOutline/> </span> 
                <p>{allLen}/{thisLen}</p>
            </section>
            </p>
        </div>
    </>
  );
};

export default NavBar;
