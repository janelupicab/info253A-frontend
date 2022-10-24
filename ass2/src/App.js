// App.js

// Imports for all our components
import NavBar from "./NavBar/NavBar";
import RightList from "./RightList/RightList";
import LeftFolders from "./LeftFolders/LeftFolders";
import style from "./style.css";

function App () {
  return (
    <>
      <h1>Ugly to do</h1>
      <div class="grid-container">
      <NavBar />
      <RightList />
      <LeftFolders />
      </div>
    </>
  )
}

export default App;