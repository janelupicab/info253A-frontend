import React, { useState, useContext, setState } from "react";
import { ItemContext } from "../App";
import { VscAdd,VscCalendar,VscEdit,VscCheck, VscClose } from "react-icons/vsc";




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

  function updateItem(e){
    setEdit({
      id: edit.id,
      title: e.target.value,
      status: edit.status
    })
  }

  function cancelUpdate(){
    setEdit("");
  }

  function confirmUpdate(){
    const newList = inbox.filter((item) => item.id !== edit.id);
    setInbox([...newList,edit]);
    cancelUpdate();
  }

    return (
      <>
        <div class="item3">
          <h1>Inbox</h1>  {/* the selected space name */}
          <p>&emsp;&ensp;&ensp; Edit task description: </p>
          <h3>&emsp;&ensp;&ensp;<input value = {edit && edit.title} onChange={(e) => updateItem(e)}/>
          <span class="material-symbols-outlined green" onClick = {(e) => confirmUpdate()}><VscCheck/></span>
          <span class="material-symbols-outlined red" onClick = {(e) => cancelUpdate()}><VscClose/></span></h3>
          <ul>

           {/* list the items in the state array for that space */}
           {inbox.map((inb) => { return ( 
                <li class = {inb.status ? 'tasks, done' : 'tasks'} onClick = {() => setEdit({id: inb.id, title: inb.title, status:inb.status})}><input class = "check" type="checkbox" onClick = {(e) => updateToDo(inb.id)}               
                />{inb.title}<span class="material-symbols-outlined red3" onClick = {() => setEdit({id: inb.id, title: inb.title, status:inb.status})}><VscEdit/></span></li> )            
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