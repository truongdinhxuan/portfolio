import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  const menu = [
    { key: "home", name: "Home", href: "#home" },
    { key: "projects", name: "Projects", href: "#projects" },
    { key: "abilities", name: "Abilities", href: "#abilities" },
    { key: "contact", name: "Contact", href: "#contact" },
    { key: "resume", name: "Resume", href: "#resume", icon: faArrowDown },
  ];
  return (
    <header className="flex bg-[#0F172A] w-auto h-[113px] mt-[38px] mx-[60px] rounded-[60px]">
      {menu.map((item, index) => (
        <div
          key={index}
          className="flex-1 flex justify-center items-center text-white font-bold text-[32px] cursor-pointer hover:text-black rounded-[60px] mx-[72px] my-[12px] hover:bg-white hover:rounded-[60px] duration-300"
        >
          {item.icon && <FontAwesomeIcon icon={item.icon} size="xs"/>}
          {item.name}
        </div>
      ))}
    </header>
  );
};
