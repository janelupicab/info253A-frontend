// import { useEffect, useState } from "react";
// import { useSetState } from "react-use";

// const ArrayMap = () => {
//   const [hobbies, setHobbies] = useState([
//     "I am level 38 and counting!"
//   ]);
  
// const getHobbies = async() => {
//   if (hobbies.length < 3){
//     hobbies.push("i  am on team valor");
//     hobbies.push("add me! my trainer code is: 0126 9490 6285");
//   }
//   return hobbies
// }

//   useEffect(() => {
//     if (hobbies.length < 3){
//       getHobbies().then((hobbies) => {
//       setHobbies(hobbies);
//       });
//     }
//   });

//   getHobbies();
//   return (
//     <>
//       {hobbies.map((description, index) => {
//         console.log({ index, description});
//         return (
//           <ul>
//             <li>{description}</li>
//           </ul>
//         );
//       })}
//     </>
//   );
// };

// export default ArrayMap;