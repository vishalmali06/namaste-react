import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100'>
            <div className='logo-container'>
                <img className='w-32'
                    src={LOGO_URL} />
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about"> About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button className="login" onClick={() => { btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div >
    );
};

export default Header;