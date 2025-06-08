import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleMainClick = ()=>{
    const target = document.getElementById("hero");
    target.scrollIntoView({behavior:'smooth'});
  }

  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <button
            
            className="text-2xl font-bold text-secondary cursor-pointer border-2 border-secondary p-1"
            onClick={()=>handleMainClick()}
          >
            SA
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-tertiary hover:text-secondary cursor-pointer transition-colors"
                smooth={true}
                duration={5}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isOpen && (
          
          <motion.div className="absolute md:hidden w-full px-2 pt-2 pb-3 space-y-1 overflow-hidden origin-top bg-primary/90 backdrop-blur-sm z-50"
          initial={{
            opacity:0,
            scaleY:0
          }}
          animate={{
            opacity:1,
            scaleY:1}}
          exit={{
           opacity:0,
            scaleY:0
          }}
          transition={{
            duration:0.5
          }}
          >
            
            
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-3 py-2 text-tertiary hover:text-secondary cursor-pointer transition-colors"
                  smooth={true}
                  
                  duration={5}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
          
          </motion.div>
          
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 