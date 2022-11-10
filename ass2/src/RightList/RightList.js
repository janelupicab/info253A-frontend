import React, { useContext } from "react";
import { ItemContext } from "../App";
import { VscAdd,VscCalendar } from "react-icons/vsc";


const RightList = () => {

  // Getting all the states from the ItemContext using useContext
  const { inbox, setInbox, today, setToday, upcoming, setUpcoming, temp, setTemp } = useContext(ItemContext);
  const idmax = 0
    return (
      <>
        <div class="item3">
          <h1>Inbox</h1>  {/* the selected space name */}
          <ul>

           {/* list the items in the state array for that space */}
           {inbox.map((inbox) => { return ( 
                <li class = {inbox.status ? 'tasks, done' : 'tasks'} ><input class = "check" type="checkbox" />{inbox.title}</li> )            })}

            {/* add a use effect for the below to add to the state array for that space */}
            <li class = "gray2"><p>&emsp;&ensp; &nbsp;</p><span class="material-symbols-outlined red3"><VscAdd/></span>
              <input class = "searchField" type="text" placeholder="Add Task" value = {temp} onChange={e => setTemp(e.target.value)}/>
              
              {/* the selected space name */}
            
              <button onClick={() => { 
                setInbox([  
                  ...inbox, {id: idmax+1, title: temp, status: false}
                ]);
                idmax += 1;
              }}>Add</button>
              
            </li>
          </ul>
      </div>  
      </>

    );
  };
  
  export default RightList;