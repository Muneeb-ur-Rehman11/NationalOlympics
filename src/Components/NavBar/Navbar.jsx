import React, { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = ({ preloaderDone }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (preloaderDone) {
      gsap.from(".nav-links", {
        duration: 0.9,
        x: -20, // Move from slightly above
        opacity: 0,
        ease: "power2.out",
        stagger: 0.1, // Animate links one by one
        type:"rotation",
        inertia:true,
      });
    }
  }, [preloaderDone]); // 🔥 Runs only when preloader is done

  const menuButton = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, title: "POA", link: "/poa" },
    { id: 2, title: "NATIONAL GAMES", link: "/national-games" },
    { id: 3, title: "HOST", link: "/host" },
    { id: 4, title: "PARTICIPATING UNITS", link: "/participating-units" },
    { id: 5, title: "TORCH RELAY", link: "/torch-relay" },
    { id: 6, title: "SPORTS", link: "/sportsandevents" },
    { id: 7, title: "SCHEDULE", link: "/schedule" },
    { id: 8, title: "CEREMONY", link: "/ceremony" },
    { id: 9, title: "NEWS", link: "/news" },
    { id: 10, title: "GALLERY", link: "/gallery" },
    { id: 11, title: "VIDEOS", link: "/videos" },
  ];

  return (
    <>
      <nav className="navbar relative w-full bg-sky-600 py-5 px-4 flex justify-center items-center">
        <ul className="hidden lg:flex space-x-12 text-white font-semibold
        max-xl:space-x-7 
        ">
          {navItems.map((item) => (
            <li key={item.id} className="hover:text-black hover:font-bold">
              {/* <a className="nav-links" href={item.link}>
                {item.title}
              </a> */}
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Menu Button for Mobile */}
        <button className="lg:hidden text-white text-2xl" onClick={menuButton}>
          <MdOutlineMenu />
        </button>
        {/* <Link to='/sportsandevents'>SPORTS</Link> */}
      </nav>

      {/* Mobile Menu */}
      <MobileMenu navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
