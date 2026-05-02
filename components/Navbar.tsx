'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_ITEMS, SOCIAL_LINKS, DEVELOPER_INFO } from '@/app/constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (!sectionId) {
      router.push('/');
      return;
    }

    if (pathname !== '/') {
      router.push('/');

      // Wait for route change before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center px-6 md:px-12 justify-between">
        {/* Left: Identity */}
        <div
          className="flex items-center gap-4 group cursor-pointer"
          onClick={(e) => handleNavClick(e as any, 'about')}
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
            <img
              src={DEVELOPER_INFO.avatar}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-bold text-sm md:text-base uppercase tracking-widest text-white/50 group-hover:text-secondary transition-colors">
            {DEVELOPER_INFO.name}
          </span>

        </div>

        {/* Center: Desktop Nav */}
        {/* <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={`/#${item.sectionId}`}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className="text-sm font-medium text-secondary hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div> */}

        {/* Right: Socials & Resume */}
        <div className="hidden md:flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-transform hover:-translate-y-0.5 duration-200"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
          <Link
            href="/resume"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-secondary hover:text-white hover:border-white/30 transition"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-background pt-24 px-6 md:hidden flex flex-col gap-8"
          >
            {/* <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={`/#${item.sectionId}`}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className="text-3xl font-light text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div> */}

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-8">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white opacity-70 hover:opacity-100"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-secondary hover:text-white hover:border-white/30 transition"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
