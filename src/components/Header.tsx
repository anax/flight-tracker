import React, {useState} from 'react';
import logo from '../assets/logo_white.svg';

interface HeaderProps {
  theme: string;
  onSearch: (term: string) => void;
  onToggle: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false)
const [activeLink, setActiveLink] = useState('#home')

  const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about", label: "About Us"},
    {href: "#services", label: "Our Services"},
    {href: "#testimonials", label: "Testimonials"},

  ]
  
  
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-sm border-b border-gray-100 shadow-sm'>
      <div className='w-full  mx-auto flex justify-between items-center p-4 sm:px-6 lg:px-8 md:h-20 h-16'>

        {/* {logo} */}
        <div className='flex items-center gap-1 cursor-pointer'>
          <img className='w-8 h-8 bg-blue-600 rounded-full ring-2 ring-blue-500 opacity-75 hover:bg-purple-500 hover:ring-purple-500 hover:opacity-100 transition-opacity'src={logo}/>
        </div>

        {/* {desktop nav items} */}
        <div className='hidden md:flex items-center gap-10'>
          {
           navLinks.map((link, index) => (
              <a key={index} href={link.href} 
                onClick={() => setActiveLink(link.href)}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
                  {link.label}
              </a>
           ))
          }
        </div>

        {/* mobile menu */}
        <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
          {isMenuOpen ? <i className="size-6 fa-solid fa-xmark"></i> : <i className="size-6 fa-solid fa-bars"></i>}
        </button>

         {/* {desktop nav items} */}
         <button className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-sm hover:shadow-blue-700'>
            <a href='#newsletter'>Get in touch</a>
         </button>



      </div>

      {/* navbar items */}
      {
        isMenuOpen && (
          <div className=' items-left md:hidden bg-white border-t border-gray-100 p-4'>
            <div className=' justify-items-start container-search mx-auto px-4 space-y-3'>
              {navLinks.map((link, index) => (
                <a
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                 className={` block text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-500" : "text-gray-400 hover:text-gray-900 transform-gpu transition-transform"}`} href={link.href} >{link.label}</a>
              ))}

                <button className='w-fit bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-sm hover:shadow-blue-700'>
                  <a href='#newsletter'>Get in touch</a>
                </button>

            </div>
          </div>
        )
      }
    </nav>
    
  );
};

export default Header;
