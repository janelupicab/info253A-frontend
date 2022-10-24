// src/TopNav/TopNav.js

const navBar = () => {
  return (
    <>
     <div class="item1">
            <p>
            <span class="material-symbols-outlined"> menu </span>
            <section class = "searchIcon"> 
                <span class="material-symbols-outlined"> search</span>
                <input class = "searchField" type="text" placeholder="Quick Find"/>
            </section>
            </p>
        </div>
        <div class="item1a">
            <p>
            <section class ="rightHeader">
                <span class="material-symbols-outlined"> check_circle </span>
                30/5
            </section>
            </p>
        </div>
    </>
  );
};

export default navBar;
