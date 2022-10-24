const LeftFolders = () => {
    return (
      <>
      <div class="item2">
            <ul>
                <li class = "bold">
                    <p>&emsp;&ensp;&nbsp;</p> 
                    <span class="material-symbols-outlined blue">inbox</span>Inbox<span class = "gray">5</span></li>
                <li>
                    <p>&emsp;&ensp;&nbsp;</p>
                    <span class="material-symbols-outlined green">today</span>Today<span class = "gray">5</span></li>
                <li>
                    <p>&emsp;&ensp;&nbsp; </p>
                    <span class="material-symbols-outlined purple">calendar_month</span>Upcoming</li>
                <li class = "bold">
                    <p>&emsp;&ensp;&nbsp; </p>
                    <span class="material-symbols-outlined gray1">expand_more</span>Projects</li>
            </ul>
            <hr/>
            <ul>
                <li>
                    <details open> 
                        <summary>&emsp;<span class="material-symbols-outlined gray2">circle</span>Work<span class = "gray">9</span></summary>
                        <ul data-role="collapsible">
                            <li> <p>&emsp;&emsp;&ensp;&ensp;</p>  
                                <span class="material-symbols-outlined yellow">circle</span>New Brand<span class = "gray">9</span></li>
                            <li> <p>&emsp;&emsp;&ensp;&ensp;</p>
                                <span class="material-symbols-outlined blue2">person</span>Website Update<span class = "gray">11</span></li>
                            <li> <p>&emsp;&emsp;&ensp;&ensp;</p>
                                <span class="material-symbols-outlined red2">person</span>Product Roadmap<span class = "gray">11</span></li>
                            <li> <p>&emsp;&emsp;&ensp;&ensp;</p>
                                <span class="material-symbols-outlined green2">person</span>Meeting Agenda<span class = "gray">6</span></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <span class="material-symbols-outlined gray1">chevron_right</span>
                    <span class="material-symbols-outlined gray2">circle</span>
                    Personal<span class = "gray">28</span></li>
                <li class = "gray2"><p>&emsp;&ensp; &nbsp;</p><span class="material-symbols-outlined red3">add</span>Add Project</li>
            </ul>

        </div>
      </>
    );
  };
  
  export default LeftFolders;