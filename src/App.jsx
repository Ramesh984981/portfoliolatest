import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Moon,
  Sun,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import ProjectCard from "./components/ProjectCard";
import aboutme from './assets/aboutme.avif';
import { calculateExperience } from "./utils";
import Typed from "typed.js";
// import Resume from "./assets/Resume.pdf";
import Ramesh from './assets/Ramesh.pdf';
import home from "./assets/projects/home.png";
import r4paws from "./assets/projects/r4paws.png";
import nirmaltoys from "./assets/projects/nirmaltoys.png";
import appc from "./assets/projects/appc.png";
import sathwik from "./assets/projects/sathwik.png";
import votehaq from "./assets/projects/votehaq.png";
import aboutmeImg from "./assets/aboutme.avif";
import images1 from "./assets/projects/images1.jpg";
import home2 from "./assets/home2.png";
// import portfolio from "./assets/portfolio.jpg";
import portfolio from "./assets/portfolio.jpg";



function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  const TypingAnimation = () => {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "Soppari Ramesh",
          "Frontend Developer",
          "React.js Developer",
          "MERN Stack",
        ],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });

      return () => {
        typed.destroy();
      };
    }, []);

    return <span ref={el} className="text-blue-600 dark:text-blue-400" />;
  };

  return (
    <div className={`${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? "py-2 bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm"
              : "py-4 bg-transparent"
          }`}
        >
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-3xl font-bold text-blue-600 dark:text-black-400 hover:scale-105 transition-transform font-logo"
              >
                 Soppari Ramesh
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="nav-link">
                    {link.text}
                  </a>
                ))}
                <a
                  href={Ramesh} // Replace with your actual resume path
                  download="Ramesh.pdf"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Download Resume
                </a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-white" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`lg:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
                isMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
              }`}
            >
              <div className="flex flex-col space-y-4 px-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </a>
                ))}
                <a
                  href={Ramesh}
                  download="Ramesh_Soppari_Resume.p"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Download Resume
                </a>
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-5 h-5" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" /> Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        {/* <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-900/30 dark:to-purple-900/30" />
            <img
              // src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
              src={portfolio}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-8 rounded-2xl animate-float">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-6 animate-slide-up">
  Hi, I'm
  <br />
 <span className="text-black">
    <TypingAnimation />
  </span>
</h1>
              <h2
                className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 mb-6 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Frontend Developer - ReactJS
              </h2>
              <p
                className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                Passionate frontend developer crafting beautiful and performant
                web experiences
              </p>
              <div
                className="flex space-x-4 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="https://github.com/Ramesh984981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-600 hover:text-blue-600 
                           dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/soppari-ramesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-600 hover:text-blue-600 
                           dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/9849819020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-600 hover:text-green-600 
             dark:text-gray-300 dark:hover:text-green-400 transition-all duration-300 hover:scale-110"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section> */}


<section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
  {/* Background Section */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-900/30 dark:to-purple-900/30" />
    <img
      src={portfolio}
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="container relative z-10 grid lg:grid-cols-2 gap-10 items-center">
    {/* Left Side: Text Content */}
    <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-8 rounded-2xl shadow-xl">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
        Hi, I'm <br />
        <span className="text-black dark:text-white">
          <TypingAnimation />
        </span>
      </h1>
      <h2
        className="text-2xl sm:text-3xl text-gray-800 dark:text-gray-200 mb-6"
        style={{ animationDelay: "0.2s" }}
      >
        Frontend Developer - ReactJS
      </h2>
      <p
        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8"
        style={{ animationDelay: "0.4s" }}
      >
        As a passionate Frontend Developer, I build fast, dynamic, and visually stunning web applications. 
        With expertise in ReactJS and modern web technologies, I focus on creating seamless, user-friendly digital experiences.
      </p>
    </div>

    {/* Right Side: Profile Image */}
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto animate-float">
  <div className="relative w-full h-full rounded-full border-[6px] border-white dark:border-gray-600 shadow-2xl overflow-hidden">
    <img
      src={images1}
      alt="Profile"
      className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
    />
  </div>
</div>

  </div>

  {/* Animations - Place at the END of the Section */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>
</section>





        {/* About Section */}
          <section
          id="about"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  //src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                  src={aboutmeImg}
                  alt="Developer working"
                  className="rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div
                  className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 dark:bg-blue-400/10 rounded-2xl -z-10 
                      transition-transform duration-300 group-hover:scale-[1.1]"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white relative mb-8 pb-4">
                  About Me
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600 dark:bg-blue-400"></span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I'm a passionate Frontend Developer with{" "}
                  {calculateExperience()} of experience specializing in{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    React.js
                  </span>
                  ,{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Next.js
                  </span>
                  , and modern JavaScript ecosystems.
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      Redux
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      HTML5
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      CSS3
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105">
                      Git
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I've successfully delivered projects ranging from dynamic
                  single-page applications to complex enterprise dashboards,
                  leveraging state management with{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Redux
                  </span>{" "}
                  and server-side rendering with{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Next.js
                  </span>
                  .
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Committed to continuous learning, I stay current with industry
                  trends to implement cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:opacity-5" />
          </div>
          <div className="container mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="section-title text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technologies I work with to create exceptional digital
                experiences
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "React.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  name: "Next.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                  color:
                    "from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-400",
                },
                {
                  name: "Redux",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                  color: "from-purple-500 to-purple-700",
                },
                {
                  name: "JavaScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                  color: "from-yellow-400 to-yellow-600",
                },
                {
                  name: "TypeScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  name: "HTML5",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  name: "CSS3",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  name: "Bootstrap",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  name: "Tailwind CSS",
                  icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                  color: "from-cyan-400 to-cyan-600",
                },
                {
                  name: "Node.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                  color: "from-green-500 to-green-600",
                },
                {
                  name: "Express",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                  color: "from-gray-400 to-gray-600",
                },
                {
                  name: "MongoDB",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                  color: "from-green-400 to-green-600",
                },
                {
                  name: "RESTful APIs",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
                  color: "from-indigo-500 to-indigo-700",
                },
                {
                  name: "Git",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                  color: "from-orange-600 to-orange-700",
                },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300
       border border-gray-200 dark:border-gray-700 hover:scale-[1.03] group overflow-hidden relative"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-3 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                      }}
                    />
                    <p
                      className="text-gray-800 dark:text-gray-200 font-semibold text-center group-hover:text-blue-600 
            dark:group-hover:text-blue-400 transition-colors"
                    >
                      {skill.name}
                    </p>
                    <div className="mt-2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Experience Section */}
<section
  id="experience"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
>
  <div className="container mx-auto">
    {/* Section Title */}
    <h2 className="section-title pb-8 text-center">Work Experience</h2>

    {/* Company Overview */}
    <div className="mt-12 text-center">
      <p className="text-purple-600 dark:text-purple-400 font-bold mb-2">
        NextPage Technologies • Feb 26, 2024 – Present
      </p>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Contributing to scalable web applications and enterprise-grade solutions
        using the MERN stack with a focus on performance and clean architecture.
      </p>
    </div>

    {/* Experience Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
      {/* SafeFood Project */}
      <div className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="absolute top-0 left-0 w-2 h-full bg-red-600 dark:bg-red-400 rounded-l-2xl group-hover:h-1/2 group-hover:top-1/4 transition-all duration-500" />
       <h3 className="text-2xl font-semibold text-blue-600 dark:text-white mb-2">
  SafeFood Project
</h3>

     
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Developed a comprehensive food safety reporting platform using Next.js
          and React.js, enabling users to report unsafe food products and access
          real-time updates.
        </p>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mt-4">
          <li>• Implemented SSR with Next.js for SEO optimization.</li>
          <li>• Built scalable backend API with Node.js & Express.js.</li>
          <li>• Integrated MongoDB for reports & location-based data.</li>
          <li>• Added WebSocket notifications for instant updates.</li>
        </ul>
      </div>

      {/* Biksouq Project */}
      <div className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 dark:bg-blue-400 rounded-l-2xl group-hover:h-1/2 group-hover:top-1/4 transition-all duration-500" />
 <h3 className="text-2xl font-semibold text-blue-600 mb-2">
  Biksouq Project
</h3>


  
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Built and maintained Biksouq Business Directory platform, simplifying
          business networking and global connections.
        </p>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mt-4">
          <li>• Developed with Next.js, Node.js, Express, and MySQL.</li>
          <li>• Built responsive UI with Bootstrap.</li>
          <li>• Implemented secure authentication and search features.</li>
        </ul>
      </div>

      {/* R4 Paws Project */}
      <div className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="absolute top-0 left-0 w-2 h-full bg-green-600 dark:bg-green-400 rounded-l-2xl group-hover:h-1/2 group-hover:top-1/4 transition-all duration-500" />
  <h3 className="text-2xl font-semibold text-blue-600 dark:text-white mb-2">
  R4 Paws Project
</h3>

       
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Developed pet care platform to connect pet owners with veterinary
          services, adoption centers, and product listings.
        </p>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mt-4">
          <li>• Built with React, Next.js, and Tailwind CSS.</li>
          <li>• Integrated veterinary service modules and adoption listings.</li>
          <li>• Delivered responsive design for seamless user experience.</li>
        </ul>
      </div>
    </div>
  </div>
</section>






        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto">
            <h2 className="section-title pb-4">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <ProjectCard
  title="Biksouq"
  description="Biksouq Business Directory is a comprehensive platform connecting businesses globally. It simplifies networking and ensures seamless business growth."
  image={home}
  link="https://biksouq.com"
  tags={["Next.js", "Node.js", "MySQL", "Express", "Bootstrap"]}
/>

            <ProjectCard
  title="R4 Paws"
  description="R4 Paws is a pet care platform that connects pet owners with veterinary services, adoption centers, and pet care products for a healthier and happier life."
  image={r4paws}
  link="https://r4paws.com"
  tags={["React", "Next.js", "Tailwind CSS", "Node.js", "Express"]}
/>

           <ProjectCard
  title="Nirmal Toys & Crafts"
  description="Nirmal Toys & Crafts is a creative platform showcasing handcrafted toys and artistic crafts, preserving traditional artistry while promoting online sales."
  image={nirmaltoys}
  link="https://nirmaltoycrafts.com/"
  tags={["React", "Next.js", "Tailwind CSS", "Node.js", "Express"]}
/>

<ProjectCard
  title="Appc"
  description="A comprehensive platform for managing applications and streamlining workflows with a user-friendly interface and responsive design."
  image={appc}
  link="https://appc.in"
  tags={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
/>

<ProjectCard
  title="Sathwik.org"
  description="A personal or organizational website designed to showcase projects, blogs, and updates with an interactive and modern UI."
image={sathwik}
  link="https://sathwik.org"
  tags={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
/>

<ProjectCard
  title="Votehaq"
  description="Votehaq is a secure and user-friendly voting platform designed to make online elections simple, transparent, and reliable for organizations and institutions."
image={votehaq}
  link="https://votehaq.com"
  tags={["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"]}
/>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="container mx-auto">
    <div className="flex justify-center">
      <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-xl w-full">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Education
        </h2>
        <div className="space-y-8 relative pl-6 border-l-2 border-blue-600 dark:border-blue-400">
          <div className="relative">
            <div className="absolute w-4 h-4 rounded-full -left-[9px] top-0" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              BSC in Computer Science
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              WCCM Degree College (8.73)
            </p>
            <p className="text-blue-600 dark:text-blue-400">2017 - 2020</p>
          </div>

          <div className="relative">
            <div className="absolute w-4 h-4 rounded-full -left-[9px] top-0" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              MPC
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Sri Thriveni Junior College (7.04)
            </p>
            <p className="text-blue-600 dark:text-blue-400">2014 - 2016</p>
          </div>

          <div className="relative">
            <div className="absolute w-4 h-4 rounded-full -left-[9px] top-0" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Secondary School (10th)
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              APRS School
            </p>
            <p className="text-blue-600 dark:text-blue-400">2013 - 2014</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? Reach
                out and I'll get back to you soon.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-700 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full">
                  Contact Details
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-blue-50 dark:bg-gray-600 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-gray-500 transition-colors">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Email
                      </h4>
                      <a
                        href="mailto:sopparir940@gmail.com"
                        className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <span className="">
                          sopparir940@gmail.com
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-blue-50 dark:bg-gray-600 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-gray-500 transition-colors">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Phone
                      </h4>
                      <a
                        href="tel:+919849819020"
                        className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +91 9849819020
                      </a>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Connect socially
                    </h4>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Ramesh984981"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-500 transition-colors"
                        aria-label="GitHub profile"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700 dark:text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/soppari-ramesh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-500 transition-colors"
                        aria-label="LinkedIn profile"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700 dark:text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>

                    

                      <a
                        href="https://www.instagram.com/soppari_Ramesh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-500 transition-colors"
                        aria-label="Instagram profile"
                      >
                        <svg
                          className="w-5 h-5 text-gray-700 dark:text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full">
                  Send a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
