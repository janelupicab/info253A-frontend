// src/TopNav/TopNav.js
import React, { useContext } from "react";
import {MdOutlineMenu, MdSearch, MdOutlineCheckCircleOutline} from "react-icons/md";
import { ItemContext } from "../App";
import {Route, Link, Routes, useLocation} from 'react-router-dom';


const NavBar = () => {

  const { inbox, setInbox, today, setToday, upcoming, setUpcoming, temp, setTemp, showLeft, setShowLeft } = useContext(ItemContext);
  
  const inboxIncompmlete = inbox.filter(task => task.status === false);
  const todayIncomplete = today.filter(task => task.status === false);
  const upcomingIncomplete = upcoming.filter(task => task.status === false);
  const allLen = inboxIncompmlete.length + todayIncomplete.length + upcomingIncomplete.length;
  
  
  const location = useLocation().pathname;
  const checkLoc = location.split('/')[1];
  const thisList = []
  var thisLen = 0; 

  if (checkLoc === "inbox"){
    thisLen = inboxIncompmlete.length; 
    const thisList = inbox; 
    console.log(thisList);
  }
  if (checkLoc === 'today'){
    thisLen = todayIncomplete.length;
    const thisList = today; 
  }
  if (checkLoc === 'upcoming'){
    thisLen = upcomingIncomplete.length;
    const thisList = today; 
  }
  
  function autocompleteMatch(input, thisList) {
    if (input == '') {
      return [];
    }
    thisList = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12'];
    var reg = new RegExp(input)
    return inbox.filter(function(term) {
      if (term.match(reg)) {
        console.log(thisList);
        setInbox(thisList);
        return term; //can i update the state? 
      }
    });
  }  

  return (
    <>
     <div class="item1">
      
            <p>
            <span class="material-symbols-outlined" onClick = {()=>setShowLeft(!showLeft)}> <MdOutlineMenu/> </span>
            <section class = "searchIcon"> 
                <span class="material-symbols-outlined"> <MdSearch/></span>
                <input class = "searchField" type="text" placeholder="Quick Find" onChange={(e) => autocompleteMatch(e.target.value, thisList)}/>
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
