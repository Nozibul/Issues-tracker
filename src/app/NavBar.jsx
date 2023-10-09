import Link from "next/link";
import { BiSolidBugAlt } from "react-icons/ai";


const NavBar = () => {
    return (
      <nav className="flex space-x-6 border-b mb-5 px-5 h-16 items-center">
        <Link className="w-20 h-" href="/">logo</Link>
        <ul className="flex space-x-6">
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/issues">Issues</Link></li>
        </ul>
      </nav>
    );
  };
  

export default NavBar;
