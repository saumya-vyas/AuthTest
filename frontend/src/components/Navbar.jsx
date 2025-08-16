import { Link } from 'react-router';
import './Navbar.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-text">MyApp</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          {/* <Link to="/register" className="nav-link btn-primary">
            Sign Up
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
