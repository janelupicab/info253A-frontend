import React, { useState, useContext } from "react";
import { ItemContext } from "../App";
import { VscAdd,VscCalendar } from "react-icons/vsc";



const IndexRightList = () => {

  // Getting all the states from the ItemContext using useContext
  const { inbox, setInbox, today, setToday, upcoming, setUpcoming, temp, setTemp } = useContext(ItemContext);
  const idmax = inbox.length+1;
  const [edit, setEdit] = useState(""); //for when trying to edit a to do action item 

  function updateToDo(id) {
    let newTask = inbox.map(task => {
      if (task.id===id){
        return ({...task, status:! task.status});
      }
      return task;
    })
    setInbox(newTask);
  }

    return (
      <>
        <div class="item3">
          <h1>Inbox</h1>  {/* the selected space name */}
          <ul>

           {/* list the items in the state array for that space */}
           {inbox.map((inbox) => { return ( 
                <li class = {inbox.status ? 'tasks, done' : 'tasks'} ><input class = "check" type="checkbox" onClick = {(e) => updateToDo(inbox.id)}               
                />{inbox.title}</li> )            
                })}

            {/* add a use effect for the below to add to the state array for that space */}
            <li class = "gray2"><p>&emsp;&ensp; &nbsp;</p><span class="material-symbols-outlined red3" onClick={() => { 
                setInbox([  
                  ...inbox, {id: idmax, title: temp, status: false}
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
  
  export default IndexRightList;