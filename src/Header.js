import React from 'react'
import './Header.css'
//import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider"
import { auth } from './firebase';
import Location from './Location';
function Header() {
    const [{basket,user},dispatch]=useStateValue();

    const handleAuthentication =() =>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            {/* <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /> */}
            <Link to="/">
            {/* <img className="header_logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"  alt='photu'/> */}
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt='photu'/>
            </Link>
            <Location/>
            <div
                className="header_search">
                <input
                    className="header_searchInput"
                    type="text" />
                  <SearchIcon className="Header_searchicon"></SearchIcon>
            </div>
            <div className='header_nav'>
                <Link to={!user && "./login"}>
                <div onClick={handleAuthentication} className='header_option'>
                   <span 
                   className='header_optionLineone'>
                    Hello {user? user.email : "guest"}
                   </span>
                   <span
                   className='header_optionLineTwo'>{user ?"Sign out" :"Sign In"}</span>
                </div>
                </Link>
                <div className='header_option'>
                   <span
                   className='header_optionLineone'>
                    Returns
                   </span>
                   <span
                   className='header_optionLineTwo'>& Orders</span>
                </div>
                <div className='header_option'>
                <span
                   className='header_optionLineone'>
                    Your
                   </span>
                   <span
                   className='header_optionLineTwo'>Prime</span>
                </div>
                <Link to="/checkout">
                <div className='header_optionBasket'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                {/* "?"" dia hai just to make things easy when there any error occurs  ()it is called optional chaining*/}
                 </div>
                 </Link>
            </div>
        </div>
    )
}

export default Header