import { useState } from "react";
import axios from "axios";
import "./Login.css";
// import Dashboard from "./Dashboard";
// import App from "./App";

function Login({setloggedin})
{
    const [Email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [dash,setdash]=useState(false);

    {}
    const handlelogin = async(e) => {
        e.preventDefault();

        try{
            const res = await axios.post(" http://localhost:8080/login",
                {
                
                  email: Email,
                  password: password
                }
            );
        


      alert(res.data);
      console.log(res.data);
      if (res.data==="Login Successfully!")
      {
        setloggedin(true);
      }
    }
    catch(err)
    {
        alert("Error ! in Login");
        console.log(err);
    }
};

// if (dash)
// {
//     return <Dashboard/>;
// }

    return(
        <div className="logindiv">
            <h2>Login</h2>
        

        <form onSubmit={handlelogin}>
       <input
       type="email"
       placeholder="email"
       required
       value={Email}
       onChange={(e)=>setEmail(e.target.value)}></input>
       <br/>
        <input
       type="password"
       placeholder="password"
       required
       value={password}
       onChange={(e)=>setPassword(e.target.value)}></input>
       <br/>
       <button type="submit">Login</button>
        </form>
        </div>
    )
}
export default Login;
