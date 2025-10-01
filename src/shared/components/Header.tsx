import {
  faArrowDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { key: "home", name: "Home", href: "#home" },
    { key: "projects", name: "Projects", href: "#projects" },
    { key: "abilities", name: "Abilities", href: "#abilities" },
    { key: "contact", name: "Contact", href: "#contact" },
    { key: "resume", name: "Resume", href: "#resume", icon: faArrowDown },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0F172A] w-auto h-[113px] mt-[38px] mx-[60px] rounded-[60px] relative">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center h-full px-8">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">truong.dev</div>

        {/* Navigation Menu */}
        <nav className="flex">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex justify-center items-center text-white font-bold text-[32px] cursor-pointer hover:text-black rounded-[60px] mx-[72px] my-[12px] hover:bg-white hover:rounded-[60px] duration-300 px-4"
            >
              {item.icon && (
                <FontAwesomeIcon icon={item.icon} size="xs" className="mr-2" />
              )}
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center h-full px-6">
        {/* Logo */}
        <div className="text-white font-bold text-xl">truong.dev</div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl p-2 hover:bg-white hover:text-black rounded-lg transition-colors duration-300"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-[#0F172A] rounded-2xl border border-gray-600 shadow-lg z-50">
          <nav className="flex flex-col py-4">
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex justify-center items-center text-white font-bold text-lg cursor-pointer hover:text-black rounded-lg mx-[72px] my-[12px] hover:bg-white  transition-all duration-300"
              >
                {item.icon && (
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="xs"
                    className="mr-2"
                  />
                )}
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// export const Header = () => {
//   const menu = [
//     { key: "home", name: "Home", href: "#home" },
//     { key: "projects", name: "Projects", href: "#projects" },
//     { key: "abilities", name: "Abilities", href: "#abilities" },
//     { key: "contact", name: "Contact", href: "#contact" },
//     { key: "resume", name: "Resume", href: "#resume", icon: faArrowDown },
//   ];
//   return (
//     <header className="flex bg-[#0F172A] w-auto h-[113px] mt-[38px] mx-[60px] rounded-[60px]">
//       {" "}
//       {menu.map((item, index) => (
//         <div
//           key={index}
//           className="flex-1 flex justify-center items-center text-white font-bold text-[32px] cursor-pointer hover:text-black rounded-[60px] mx-[72px] my-[12px] hover:bg-white hover:rounded-[60px] duration-300"
//         >
//           {" "}
//           {item.icon && <FontAwesomeIcon icon={item.icon} size="xs" />}{" "}
//           {item.name}{" "}
//         </div>
//       ))}{" "}
//     </header>
//   );
// };
