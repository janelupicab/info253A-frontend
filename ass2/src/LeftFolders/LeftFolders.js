import React, { useContext } from "react";
import { ItemContext } from "../App";
import {VscAdd, VscCalendar, VscInbox, VscLocation, VscCircleFilled } from "react-icons/vsc";
import { MdCalendarToday, MdExpandMore, MdPerson, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const LeftFolders = () => {
    // Getting all the states from the ItemContext using useContext
    const { inbox, setInbox, today, setToday, upcoming, setUpcoming } = useContext(ItemContext);

    const inboxIncompmlete = inbox.filter(task => task.status === false);
    const todayIncomplete = today.filter(task => task.status === false);
    const upcomingIncomplete = upcoming.filter(task => task.status === false);

    return (
      <>
      <div class="item2">
            <ul>
                <li >
                    <p>&emsp;&ensp;&nbsp;</p> 
                    <span class="material-symbols-outlined blue"><VscInbox/></span><Link to="inbox" class = "link">Inbox</Link><span class = "gray">{inboxIncompmlete.length}</span></li>
                <li>
                    <p>&emsp;&ensp;&nbsp;</p>
                    <span class="material-symbols-outlined green"><MdCalendarToday/></span><Link to="today" class = "link">Today</Link><span class = "gray">{todayIncomplete.length}</span></li>
                <li>
                    <p>&emsp;&ensp; </p>
                    <span class="material-symbols-outlined purple"><VscCalendar/></span><Link to="upcoming" class = "link">Upcoming</Link><span class = "gray">{upcomingIncomplete.length}</span></li>
                <li class = "bold">
                    <p>&emsp;&ensp; </p>
                    <span class="material-symbols-outlined gray1"><MdExpandMore/></span>Projects</li>
            </ul>
            <hr/>
            <ul>
                <li>
                    <details open> 
                        <summary>&emsp;<span class="material-symbols-outlined gray2"><VscCircleFilled/></span>Work<span class = "gray">9</span></summary>
                        <ul data-role="collapsible">
                            <li> <p>&emsp;&emsp;&ensp;&ensp;</p>  
                                <span class="material-symbols-outlined yellow"><VscCircleFilled/></span>New Brand<span class = "gray">9</span></li>
                            <li> <p>&emsp;&emsp;&ensp;&ensp;</p>
                                <span class="material-symbols-outlined blue2"><MdPerson/></span>Website Update<span class = "gray">11</span></li>
                            <li> <p>&emsp;&emsp;&ensp;&ensp;</p>
                                <span class="material-symbols-outlined red2"><MdPerson/></span>Product Roadmap<span class = "gray">11</span></li>
                            <li> <p>&emsp;&emsp;&ensp;&ensp;</p>
                                <span class="material-symbols-outlined green2"><MdPerson/></span>Meeting Agenda<span class = "gray">6</span></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <span class="material-symbols-outlined gray1"><MdOutlineKeyboardArrowRight/></span>
                    <span class="material-symbols-outlined gray2"><VscCircleFilled/></span>
                    Personal<span class = "gray">28</span></li>
                <li class = "gray2"><p>&emsp;&ensp;</p><span class="material-symbols-outlined red3"><VscAdd/></span>Add Project</li>
            </ul>

        </div>
      </>
    );
  };
  
  export default LeftFolders;