import React, { useContext } from "react";
import { ItemContext } from "../App";
import { VscAdd,VscCalendar } from "react-icons/vsc";


const UpcomingRightList = () => {

  // Getting all the states from the ItemContext using useContext
  const { inbox, setInbox, today, setToday, upcoming, setUpcoming, temp, setTemp } = useContext(ItemContext);
  const idmax = upcoming.length+1;

  function updateToDo(id) {
    let newTask = upcoming.map(task => {
      if (task.id===id){
        return ({...task, status:! task.status});
      }
      return task;
    })
    setUpcoming(newTask);
  }

    return (
      <>
        <div class="item3">
          <h1>Upcoming</h1>  {/* the selected space name */}
          <ul>

           {/* list the items in the state array for that space */}
           {upcoming.map((upcoming) => { return ( 
                <li class = {upcoming.status ? 'tasks, done' : 'tasks'} ><input class = "check" type="checkbox" onClick = {(e) => updateToDo(upcoming.id)}/>{upcoming.title}</li> )            })}

            {/* add a use effect for the below to add to the state array for that space */}
            <li class = "gray2"><p>&emsp;&ensp; &nbsp;</p><span class="material-symbols-outlined red3" onClick={(e) => { 
                setUpcoming([  
                  ...upcoming, {id: idmax, title: temp, status: false}
                ]);
                setTemp("");
                idmax += 1;
              }}><VscAdd/></span>
              <input class = "searchField" type="text" placeholder="Add Task" value = {temp} onChange={e => setTemp(e.target.value)}/>            
              
            </li>
          </ul>
      </div>  
      </>

    );
  };
  
  export default UpcomingRightList;