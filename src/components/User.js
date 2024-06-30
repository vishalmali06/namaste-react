import { useState } from "react";
const User = ({ name }) => {
    const [count, setcount] = useState(0);
    const [count2, setcout2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count = {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Pune</h3>
            <h4>Contact: @vishalmali06</h4>
        </div>
    )
}

export default User;