
import Link from "next/link.js";

function Navbar({ links }) {
  return (
    <div className="hidden lg:flex items-center gap-8 grow justify-center">
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;