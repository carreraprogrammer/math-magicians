import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navBar">
    <p className="logo">Math Magicians</p>
    <ul className="nav">
      <li className="navLink"><Link to="/">Home</Link></li>
      <li className="navLink"><Link to="/calculator">Calculator</Link></li>
      <li className="navLink"><Link to="/quotes">Quote</Link></li>
    </ul>
  </div>
);

export default Navbar;
