
//* JavaScript module syntax to import useState from React
// import React from 'react'
// import { useState } from 'react'

// * vs one line of code vvv
import React, { useState } from 'react'

function App() {
  let [counter, changeCounter] = useState(1) 
  // Use declarative rendering to update the page automatically
  window.changeCounter = changeCounter 
  // Use JSX to interpolate a JavaScript variable into the page
  return (
    <div>
{/* calls the variables in line#10 */}
      <h1>{counter}</h1> 
      <h4>{counter}</h4>
    </div>
    
  )
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
         
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
