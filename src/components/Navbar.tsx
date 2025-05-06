import { Link } from "react-router-dom"
import { PiGlobe } from "react-icons/pi"
import { IoMenu } from "react-icons/io5"

import BrandLogo from "./ui/BrandLogo"
import Wrapper from "./Wrapper"
import { navItems, socialMediaLinks } from "../constants"

const Navbar = () => {
  return (
    <header className="py-7.5 font-space-grotesk">
      <Wrapper>
        <div className="flex items-center justify-between gap-x-0 lg:gap-x-8">
          <Link to="/" aria-label="Logo" title="Birany Logo">
            <BrandLogo />
          </Link>
          <div className="flex grow items-center lg:bg-gray-100 px-4 lg:px-8 py-3 rounded-2xl">
            {/* NAV LINKS - hidden on small screens */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-x-7">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="text-md">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center justify-end grow">
              {/* SOCIAL MEDIA ICONS - hidden below lg */}
              <div className="hidden xl:flex items-center divide-x">
                {socialMediaLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 transition-colors duration-300 px-7"
                  >
                    <item.icon className="size-5" />
                  </a>
                ))}
              </div>
              {/* ACTIONS */}
              <div className="flex items-center gap-x-4 ml-6">
                <Link to="/contact">
                  <button className="bg-brand px-7 py-2 rounded-lg cursor-pointer hidden lg:flex">
                    Bizimlə əlaqə
                  </button>
                </Link>
                <button className="bg-neutral-300/75 p-2 rounded-lg cursor-pointer">
                  <PiGlobe className="size-6" />
                </button>
                {/* HAMBURGER - visible only below md */}
                <button className="lg:hidden bg-brand p-2 rounded-lg cursor-pointer">
                  <IoMenu className="size-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default Navbar
