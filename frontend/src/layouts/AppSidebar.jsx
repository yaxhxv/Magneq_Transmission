import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import {
  BoxCubeIcon,
  SalesBox,
  ListIcon,
  FileIcon,
  GridIcon,
  MailIcon,
  ChatIcon,
  HorizontaLDots,
  Logo,
  PageIcon,
} from '../icons';
import { useSidebar } from '../hooks/useSidebar';

const navItems = [
  { icon: GridIcon, name: 'Dashboard', path: '/dashboard' },
  { icon: SalesBox, name: 'Sales', path: '/sales' },
  { icon: BoxCubeIcon, name: 'Production', path: '/production' },
  { icon: ListIcon, name: 'Stores', path: '/stores' },
  { icon: FileIcon, name: 'Purchase', path: '/purchase' },
];

const supportItems = [
  { icon: ChatIcon, name: 'Chat', path: '/support/chat' },
  { icon: MailIcon, name: 'Email', path: '/support/email' },
];

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let submenuMatched = false;
    navItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: 'main', index });
            submenuMatched = true;
          }
        });
      }
    });
    if (!submenuMatched) setOpenSubmenu(null);
  }, [location, isActive]);

  const renderMenuItems = (items) => (
    <ul className="flex flex-col gap-3">
      {items.map((nav) => {
        const Icon = nav.icon;
        const active = isActive(nav.path);

        return (
          <li key={nav.name}>
            <Link
              to={nav.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                active
                  ? 'bg-[#eef2ff] text-[#4f46e5] dark:bg-gray-800 dark:text-white'
                  : 'text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              } ${!isExpanded && !isHovered ? 'justify-center' : ''}`}
            >
              <Icon
                className={`w-5 h-5 ${
                  active
                    ? 'text-[#4f46e5] dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              />
              {(isExpanded || isHovered || isMobileOpen) && (
                <span>{nav.name}</span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-40 transition-all duration-300 px-5 pt-8 ${
        isExpanded || isMobileOpen
          ? 'w-[290px]'
          : isHovered
          ? 'w-[290px]'
          : 'w-[90px]'
      } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div
        className={`mb-10 ${
          !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start'
        } flex`}
      >
        <Link to="/" className='flex gap-3'>
          {(isExpanded || isHovered || isMobileOpen) ? (
            <Logo/>
          ) : (
            <Logo />
          )}<div className='py-1 font-bold font'>Magneq</div>
        </Link>
      </div>

      {/* Menu */}
      <nav className="mb-8">
        <h2
          className={`mb-3 my-2 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 ${
            !isExpanded && !isHovered ? 'text-center' : ''
          }`}
        >
          {(isExpanded || isHovered || isMobileOpen) ? 'Menu' : (
            <HorizontaLDots />
          )}
        </h2>
        {renderMenuItems(navItems)}
      </nav>

      {/* Support */}
      <nav className="mb-10">
        <h2
          className={`mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 ${
            !isExpanded && !isHovered ? 'text-center' : ''
          }`}
        >
          {(isExpanded || isHovered || isMobileOpen) ? 'Support' : (
            <HorizontaLDots />
          )}
        </h2>
        {renderMenuItems(supportItems)}
      </nav>

      {/* Logout Button */}
      <button
        className={`mt-auto mb-6 flex items-center justify-center w-full border rounded-md py-2 text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700 ${
          isExpanded || isHovered || isMobileOpen ? 'gap-2 px-4' : 'w-10 h-10'
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 15l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
        {(isExpanded || isHovered || isMobileOpen) && <span>Logout</span>}
      </button>
    </aside>
  );
};

export default AppSidebar;