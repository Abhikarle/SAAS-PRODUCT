import { Menu, X } from 'lucide-react'
import { useState } from 'react'
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Features", href: '#features' },
    { name: "Testimonial", href: '#testimonial' },
    { name: "Pricing", href: '#pricing' },
    { name: "Faq", href:'#faq' }
  ]
  return (
    <header className='sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800'>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href='/' className='flex items-center gap-2'>
          <div className="w-10 h-10 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold">
            ✨
          </div>
          <span className="text-2xl font-bold tracking-tight">
            NovaAI
          </span>
        </a>
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a href={link.href} key={link.name} className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300'>
              {link.name}
            </a>
          ))}
        </nav>
        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className='text-slate-700 dark:text-slate-300 hover:text-blue-500 transition'>
            Login
          </button>
          <button className='px-5 py-2 rounded-xl bg-linear-to-r from-blue-600 to-violet-400 text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/20'>
            Get Started
          </button>
        </div>
        {/* Mobile */}
        <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden border-t border-slate-800 dark:border-slate-200 bg-white dark:bg-slate-800'>
          <nav className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}

            <hr className="border-slate-200 dark:border-slate-800" />

            <button className="text-left text-slate-700 dark:text-slate-300 hover:cursor-pointer">
              Login
            </button>

            <button className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-violet-600 text-white font-semibold hover:cursor-pointer">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar
