
import { useState } from "react";
import axios from "axios";


function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleregister = async(e) => {
        e.preventDefault();

        try{
            const res = await axios.post(" http://localhost:8080/register",
                {
                 username: username,
                  email: email,
                  password: password
                }
            );
        


      alert(res.data);
      console.log(res.data);
    }
    catch(err)
    {
        alert("Error !");
        console.log(err);
    }
};


return (
    <div style={
        {
            color:"white",
            backgroundColor:"blue"
        }
    }>
        <h2>Registration form</h2>
        <form onSubmit={
            handleregister
        }>
            <input type="text" placeholder="Username" required value={username}
                onChange={
                    (e) => setUsername(e.target.value)
                }></input>
                <br/>

                <input type="email" placeholder="Email" required value={email}
                onChange={
                    (e) => setEmail(e.target.value)
                }></input><br/>

                <input type="password" placeholder="Password" required value={password}
                onChange={
                    (e) => setPassword(e.target.value)
                }></input>
                <br/>
                <button type="submit"
                
                style={
                    {
                        backgroundColor:"green",
                        color:"black"
                    }
                }>Register</button>
        </form>
    </div>
)
}

export default Register;