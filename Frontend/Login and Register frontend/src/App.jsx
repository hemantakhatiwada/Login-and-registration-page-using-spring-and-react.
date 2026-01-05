import { useState } from 'react'

import './App.css'
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {

  const [showlogin,setLogin]=useState(true);
  const [loggedin,setloggedin]=useState(false);

  if (loggedin)
  {
    return(
      <Dashboard/>
    )
  }

 

  return (
   <div>
    <h1 style={
      {
        color:"blue"
      }
    }>Simple React Login and Registration Page</h1>

    {showlogin ? <Login setloggedin={setloggedin} />:<Register/>}
    
    <button onClick={()=>setLogin(true)}>Login</button>
    <button onClick={()=>setLogin(false)}>Register</button>
   </div>
  )
}

export default App;
