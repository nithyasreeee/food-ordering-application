import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";
import { Link } from "react-router";  
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';



function NavBar() {
  return <div className="header" >
    <img className="logo" src="logo.png" alt="Logo" />
    <div className="menu"> 
       
   <Link to="/"><FaHome />Home </Link>
    <Link to="/about"><IoFastFood />About</Link>
    <Link to="./contact"><IoMdContact />Contact</Link>
    <Link to="'/login"><IoLogInSharp />Login</Link>
    <header>
    <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
   </div>
   
  
   </div>
}

export default NavBar;