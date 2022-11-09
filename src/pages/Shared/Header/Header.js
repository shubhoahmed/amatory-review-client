import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        {
            user?.email &&
            <>
                <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                <li className='font-semibold'><Link to='/add-service'>Add Service</Link></li>

            </>


        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">AmatoryReview</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end ">
                {user?.email ? <div className='flex gap-5 items-center'>
                    <img className='w-10 rounded-full' src={user.photoURL} alt="" />
                    <button onClick={logOut} className='btn-ghost'>Log Out</button>
                </div> : <Link to='/login' className="btn">Login</Link>}
            </div>
        </div>
    );
};

export default Header;