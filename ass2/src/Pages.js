import React, { useContext } from "react";
import { ItemContext } from "./App";
import { VscAdd,VscCalendar } from "react-icons/vsc";
import InboxRightList from "./RightList/InboxRightList";
import TodayRightList from "./RightList/TodayRightList";
import UpcomingRightList from "./RightList/UpcomingRightList";

export function Home() {
    return (
       <div>
        </div> );
}

export function Inbox() {
    return (
        <div><InboxRightList/></div>
    );
}

export function Today() {
    return (
       <div>
        <TodayRightList/>
        </div> );
}

export function Upcoming() {
    return (
        <div><UpcomingRightList/></div>

        );
}
