import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { ActionButtons } from './ActionButtons';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-16">
        <Logo />
        <NavLinks />
        <div className="flex items-center space-x-4">
          <ActionButtons />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}; 