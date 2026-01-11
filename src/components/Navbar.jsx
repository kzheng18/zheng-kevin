import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActivePage = (path) => {
    if (path === '/projects') {
      return location.pathname.startsWith('/projects');
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect border-b border-dark-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo - terminal style */}
          <button
            onClick={() => navigateToPage('/about')}
            className="flex items-center gap-2 font-mono text-sm text-dark-text hover:text-white transition-all duration-300 group"
          >
            <span className="text-dark-muted">$</span>
            <span className="group-hover:translate-x-0.5 transition-transform">kevin@portfolio</span>
          </button>

          {/* Desktop Navigation - terminal tabs */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { name: 'about', path: '/about' },
              { name: 'projects', path: '/projects' },
              { name: 'contact', path: '/contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToPage(item.path)}
                className={`px-4 py-1.5 font-mono text-xs transition-all duration-300 border-b-2 ${
                  isActivePage(item.path)
                    ? 'text-dark-text border-dark-text bg-dark-surface/30'
                    : 'text-dark-muted border-transparent hover:text-dark-text hover:bg-dark-surface/20'
                }`}
              >
                [{item.name}]
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark-text hover:text-white transition-colors"
          >
            <div className="font-mono text-sm">
              {mobileMenuOpen ? '[×]' : '[≡]'}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="glass-effect border-t border-dark-border px-4 py-4 space-y-1 bg-dark-bg/50">
          {[
            { name: 'about', path: '/about' },
            { name: 'projects', path: '/projects' },
            { name: 'contact', path: '/contact' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => navigateToPage(item.path)}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 font-mono text-xs transition-all duration-300 ${
                isActivePage(item.path)
                  ? 'text-dark-text bg-dark-surface/30'
                  : 'text-dark-muted hover:text-dark-text hover:bg-dark-surface/20'
              }`}
            >
              <span className="text-dark-muted">$</span>
              <span>cd ~/{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
