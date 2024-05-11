import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { CgProfile, CgLogOut } from "react-icons/cg";
const Navbar = () => {
    const navigate = useNavigate()
    const { user, userSignOut } = useContext(AuthContext)
    const navLink = <>
        <li><NavLink to={`/`}>Home</NavLink></li>
        <li><NavLink to={`/available-food`}>Available Food</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 font-semibold mt-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img onClick={() => navigate('/')} className="h-16 hover:cursor-pointer" src="./src/assets/logoWhite.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {
                            navLink
                        }
                        <li>
                            <details>
                                <summary>My Food</summary>
                                <ul className="p-2">
                                    <li><Link to={`/add-food`}>Add Food</Link></li>
                                    <li><Link to={`/my-food`}>Manage My Food</Link></li>
                                    <li><Link to={`/my-request`}>My Food Request</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-circle m-1"><img className="w-full h-full rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to={'/profile'}><CgProfile />Profile Settings</NavLink></li>
                                <li><button onClick={userSignOut}><CgLogOut />Logout</button></li>
                            </ul>
                        </div> : <div className="flex gap-4 items-center justify-center">
                            <label className="cursor-pointer grid place-items-center">
                                <input type="checkbox" value="sunset" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </label>
                            <NavLink to={`/login`} className="relative inline-flex items-center justify-start  px-5 py-3 bg-black overflow-hidden font-bold rounded-md group">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 inline-flex gap-2 items-center">Login<IoMdLogIn /></span>
                                <span className="absolute inset-0 rounded-md"></span>
                            </NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;