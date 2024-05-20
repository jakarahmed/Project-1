
import { NavLink } from 'react-router-dom';

const Navbar = () => {
const link=<>
<NavLink className={"text-white"} to={"/"}><li>Home</li></NavLink>
<NavLink className={"text-white"} to={"/"}><li>About</li></NavLink>
<NavLink className={"text-white"} to={"/"}><li>Contact</li></NavLink>
<NavLink className={"text-white"} to={"/4"}><li>Section4</li></NavLink>
</>
    
    return (
        <div>
         <div className="navbar bg-black fixed z-10 bg-opacity-35 mx-auto max-w-screen-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
       {
        link
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">Bistro boss</a>
  </div>
  <div className="navbar-center hidden lg:flex list-none gap-5">
   {
    link
   }
  </div>
 
</div>
        </div>
    );
};

export default Navbar;