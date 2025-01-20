import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Rani.png";
import logo11 from "../assets/Rani1..png";
import profile from "../assets/logo1.jpg";
import about from "../assets/about.jpeg";
import arrowicon from "../assets/images/arrow-icon.png";
import arrowdarkicon from "../assets/images/arrow-icon-dark.png";
import moonicon from "../assets/images/moon_icon.png";
import sunicon from "../assets/images/sun_icon.png";
import headerbg from "../assets/images/header-bg-color.png";
import send from "../assets/images/send-icon.png";
import menublack from "../assets/images/menu-black.png";
import menuwhite from "../assets/images/menu-white.png";
import closeblack from "../assets/images/close-black.png";
import closewhite from "../assets/images/close-white.png";
import hand from "../assets/images/hand-icon.png";
import rightarrowhite from "../assets/images/right-arrow-white.png";
import download from "../assets/images/download-icon.png";
import codeicon from "../assets/images/code-icon.png";
import codedarkicon from "../assets/images/code-icon-dark.png";
import eduicon from "../assets/images/edu-icon.png";
import edudarkicon from "../assets/images/edu-icon-dark.png";
import projecticon from "../assets/images/project-icon.png";
import projectdarkicon from "../assets/images/project-icon-dark.png";
import vscode from "../assets/images/vscode.png";
import git from "../assets/images/git.png";
import intellij from "../assets/images/intellij.png";
import java from "../assets/images/java.webp";
import mysql from "../assets/images/mysql.webp";

import Footer from "./Footer";
import Swal from "sweetalert2";

const Home = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a988cc2-2986-42dd-a169-fd422701eee6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data); // Check the error message
      // setResult(data.message);
    }
  };

  const navbarRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinksRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/50",
          "dark:bg-transparent"
        );
      } else {
        navbarRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinksRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/50",
          "dark:bg-transparent"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync theme with localStorage and system preferences
  useEffect(() => {
    const userPrefersDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(userPrefersDark);
    document.documentElement.classList.toggle("dark", userPrefersDark);
  }, []);

  // Toggle theme and update localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.theme = newTheme ? "dark" : "light";
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="overflow-x-hidden leading-8 dark:bg-darkTheme dark:text-white">
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
          <img src={headerbg} alt="" className="w-full" />
        </div>
        <nav
          ref={navbarRef}
          className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
        >
          <img
            src={logo}
            alt="Rani Rangari"
            className="w-28 cursor-pointer mr-14 dark:hidden"
          />
          <img
            src={logo11}
            alt="Rani Rangari"
            className="w-28 cursor-pointer mr-14 hidden dark:block "
          />
          <ul
            ref={navLinksRef}
            className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          >
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme}>
              <img src={moonicon} alt="" className="w-6 dark:hidden " />
              <img src={sunicon} alt="" className="w-6 hidden dark:block " />
            </button>
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50"
            >
              Contact
              <img className="w-3 dark:hidden" src={arrowicon} alt="" />
              <img
                className="w-3 hidden dark:block"
                src={arrowdarkicon}
                alt=""
              />
            </a>
            <button onClick={openMenu} className="block md:hidden ml-3">
              <img src={menublack} alt="" className="w-6 dark:hidden " />
              <img src={menuwhite} alt="" className="w-6 hidden dark:block" />
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <ul
          className={`flex md:hidden flex-col py-20 px-10 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white gap-4 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="sideMenu"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <img
              src={closeblack}
              alt=""
              className="w-5 cursor-pointer dark:hidden"
            />
            <img
              src={closewhite}
              alt=""
              className="w-5 cursor-pointer hidden dark:block"
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </div>

      {/* header  */}

      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <img src={profile} alt="" className="rounded-full w-32 " />
        <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3">
          Hi! I'm Rani Rangari
          <img src={hand} alt="" className="w-6" />
        </h3>
        <p className="max-w-2xl mx-auto">
          I am a passionate software developer eager to design and build
          innovative web applications, leveraging modern technologies to create
          seamless user experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
          <a
            href="#contact"
            className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#e84792] to-[#e6d51f] text-white flex items-center gap-2 dark:border-transparent"
          >
            Contact me
            <img src={rightarrowhite} alt="" className="w-4" />
          </a>
          <a
            href="#"
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          >
            My Resume
            <img src={download} alt="" className="w-4" />
          </a>
        </div>
      </div>
      {/* about me */}
      <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg">Introduction</h4>
        <h2 className="text-center text-5xl">About Me </h2>
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 ">
          <div className="max-w-max mx-auto relative">
            <img
              src={about}
              alt=""
              className="w-64 sm:w-80 rounded-3xl max-w-none"
            />
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl">
              I am a passionate and motivated Software Developer, eager to apply
              my skills in building dynamic web applications.I am dedicated to
              learning and growing while contributing to impactful projects.{" "}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-auto gap-6 max-w-2xl ">
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img src={codeicon} alt="" className="w-7 mt-3 dark:hidden" />
                <img
                  src={codedarkicon}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-blue-700 dark:text-white">
                  Languages{" "}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  HTML CSS, Javascript, React Js, C, C++, Java, Spring Boot,
                  MySQL{" "}
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black  dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img src={eduicon} alt="" className="w-7 mt-3 dark:hidden" />
                <img
                  src={edudarkicon}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-blue-700 dark:text-white">
                  Education{" "}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  MCA Masters in Computer Applications{" "}
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black  dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img
                  src={projecticon}
                  alt=""
                  className="w-7 mt-3 dark:hidden"
                />
                <img
                  src={projectdarkicon}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />

                <h3 className="my-4 font-semibold text-blue-700 dark:text-white">
                  Projects{" "}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  Built fullstack projects using Reactjs, Springboot, mysql{" "}
                </p>
              </li>
            </ul>
            <h4 className="my-6 text-gray-700 dark:text-white/80">
              Tools I use{" "}
            </h4>
            <ul className="flex items-center gap-3 sm:gap-5">
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src={vscode} alt="" className="w-5 sm:w-7" />
              </li>

              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src={intellij} alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src={mysql} alt="" className="w-5 sm:w-7" />
              </li>
              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src={git} alt="" className="w-5 sm:w-7" />
              </li>

              <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src={java} alt="" className="w-5 sm:w-7" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* my work */}
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg">My projects</h4>
        <h2 className="text-center text-5xl">My latest work</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Discover a portfolio of projects demonstrating my expertise in
          full-stack development and innovative application design.
        </p>
        <div className="grid grid-cols-auto my-10 gap-5">
          {/* first */}
          <div className="aspect-square bg-[url('/artisans.webp')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-1 px-2 flex flex-col gap-1 duration-500 group-hover:bottom-7">
              {/* First Row */}
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-rose-400">
                  The Artisans Collective
                </h2>
                <a
                  href="https://github.com/rangari-rani/The-Artisans-Collective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-rose-200 transition"
                >
                  <img src={git} alt="GitHub" className="w-5" />
                </a>
              </div>
              {/* Second Row */}
              <div className="flex items-center justify-between">
                <p className="text-medium text-gray-600">
                  Reactjs | Spring Boot
                </p>
                <a
                  href="https://artisans-collective.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-rose-200 transition"
                >
                  <img src={send} alt="Live" className="w-5" />
                </a>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="aspect-square bg-[url('/work2.webp')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-1 px-2 flex flex-col gap-1 duration-500 group-hover:bottom-7">
              {/* First Row */}
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-rose-400">
                  Project Execution Hub
                </h2>
                <a
                  href="https://github.com/rangari-rani/Project-Execution-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-rose-200 transition"
                >
                  <img src={git} alt="GitHub" className="w-5" />
                </a>
              </div>
              {/* Second Row */}
              <div className="flex items-center justify-between">
                <p className="text-medium text-gray-600">
                  Reactjs | Spring Boot
                </p>
                <a
                  href="https://projectexecution.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-rose-200 transition"
                >
                  <img src={send} alt="Live" className="w-5" />
                </a>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="aspect-square bg-[url('/home2.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-1 px-2 flex flex-col gap-1 duration-500 group-hover:bottom-7">
              {/* First Row */}
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-rose-400">StayEase Space</h2>
                <a
                  href="https://github.com/rangari-rani/AccommodationCompanion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-rose-200 transition"
                >
                  <img src={git} alt="GitHub" className="w-5" />
                </a>
              </div>
              {/* Second Row */}
              <div className="flex items-center justify-between">
                <p className="text-medium text-gray-600">
                  Reactjs | Spring Boot
                </p>
                <a
                  href="https://accommodation-companion.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-rose-200 transition"
                >
                  <img src={send} alt="Live" className="w-5" />
                </a>
              </div>
            </div>
          </div>
          {/* fourth */}
          <div className="aspect-square bg-[url('/music.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-1 px-2 flex flex-col gap-1 duration-500 group-hover:bottom-7">
              {/* First Row */}
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-rose-400">Stream PLay</h2>
                <a
                  href="https://github.com/rangari-rani/streamplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-rose-200 transition"
                >
                  <img src={git} alt="GitHub" className="w-5" />
                </a>
              </div>
              {/* Second Row */}
              <div className="flex items-center justify-between">
                <p className="text-medium text-gray-600">
                  Reactjs | Tailwind css
                </p>
                <a
                  href="https://streamplay-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-rose-200 transition"
                >
                  <img src={send} alt="Live" className="w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/images/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
      >
        <h4 className="text-center mb-2 text-lg ">Connect with me </h4>
        <h2 className="text-center text-5xl ">Get in touch </h2>
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto ">
          <div className=" grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              name="name"
              required
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            />
            <input
              name="email"
              required
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            />
          </div>
          <textarea
            name="message"
            required
            rows="6"
            placeholder="Enter your message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          >
            Send Message
            <img src={rightarrowhite} alt="" className="w-4" />
          </button>
        </form>
      </div>

      {/* footer */}

      <Footer />
    </>
  );
};

export default Home;
