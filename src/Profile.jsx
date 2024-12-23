import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
    const [value,setValue]=useState("");

    return (
        <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <hr />
        <h2>Enter profile you want to visit: </h2>
        <form>
            <input type="text" value={value} placeholder="Enter profile name" onChange={(e)=>setValue(e.target.value)} />
            <Link to={`/profile/${value}`}><button>Submit</button></Link>
        </form>
        </div>
    );
};

export default Profile;
