const RightList = () => {
    return (
      <>
       <div class="item3">        
            <h1>Inbox</h1>
            <ul>
                <li class = "tasks"><input class = "check" type="checkbox" />Call Mom</li>
                <hr/>
                <li class = "tasks"><input class = "check" type="checkbox"/>Buy the new issue of Scientific American</li>
                <hr/>
                <li class = "tasks"><input class = "check" type="checkbox"/>Return the textbook to Josie</li>
                <hr/>
                <li class = "tasks"><input class = "check" type="checkbox"/>Buy the new albumn by Rake</li>
                <hr/>
                <li class = "tasks"><input class = "check" type="checkbox"/>Buy a gift card for Dad</li>
                <hr/>
                <li class = "gray2"><p>&emsp;&ensp; &nbsp;</p><span class="material-symbols-outlined red3">add</span>Add Task</li>

            </ul>

        </div>  
      </>
    );
  };
  
  export default RightList;