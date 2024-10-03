import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { IoBagHandleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [searchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }

    const handleSearchClick = () => {
        setSearchActive(!searchActive);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Fetch the details based on the searchTerm
        console.log("Searching for:", searchTerm);
        // Make an API call or fetch data logic here.
        // For example:
        // navigate(`/search?query=${searchTerm}`);
    }

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact info</a>
            </ul>
            <div className="navbar-right">
                <div className="navbar-search">
                <IoMdSearch className="search" onClick={handleSearchClick} size={30}/>
                    {searchActive && (
                        <form onSubmit={handleSearchSubmit} className="navbar-search-form">
                            <input 
                                type="text" 
                                placeholder="Search items..." 
                                value={searchTerm} 
                                onChange={handleSearchChange} 
                            />
                            <button type="submit">Search</button>
                        </form>
                    )}
                </div>
                <div className="navbar-search-icon">
                    <Link to='/cart'><IoBagHandleSharp size={30}/></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
                    : <div className='navbar-profile'>
                        <CgProfile size={30}/>
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>}
            </div>
        </div>
    )
}

export default Navbar;






// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';

// const Navbar = ({setShowLogin}) => {

//     const [menu,setMenu] =useState("home");

//     const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

//     const navigate = useNavigate();

//     const logout = () =>{
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/")
//     }

//   return (
//     <div className='navbar'>
//         <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
//         <ul className='navbar-menu'>
//             <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
//             <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
//             <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
//             <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact info</a>
//         </ul>
//         <div className="navbar-right">
//             <img src={assets.search_icon} alt="" />
//             <div className="navbar-search-icon">
//                 <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
//                 <div className={getTotalCartAmount()===0?"":"dot"}></div>
//             </div>
//             {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
//             :<div className='navbar-profile'>
//                 <img src={assets.profile_icon} alt="" />
//                 <ul className="nav-profile-dropdown">
//                     <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//                     <hr />
//                     <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//                 </ul>
//                 </div>}
//         </div>
//     </div>
//   )
// }

// export default Navbar
