import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import LoggedNavbar from '../Navbar/LoggedNavbar';
import cn from 'classnames';
import Footer from '../Footer/Footer';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import { IsLoggedContext } from '../../state/IsLogged';

const Layout = ({ children }) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const [isBottomNavigation, setIsBottomNavigation] = useState(false);
  const { isLogged } = useContext(IsLoggedContext);

  //Debounce can be implemented here:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWindowResize);
    if (window.innerWidth < 1020) {
      setIsBottomNavigation(true);
    } else {
      setIsBottomNavigation(false);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleScroll = () => {
    let scrollTop = window.pageYOffset;
    if (scrollTop === 0) {
      setIsNavbarCollapsed(false);
    } else {
      setIsNavbarCollapsed(true);
    }
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 1020) {
      setIsBottomNavigation(true);
    } else {
      setIsBottomNavigation(false);
    }
  };

  return (
    <app-root>
      <div
        className={cn('layout', {
          'navbar--collapse': isNavbarCollapsed,
        })}
      >
        {!isBottomNavigation && !isLogged ? <Navbar /> : null}
        {!isBottomNavigation && isLogged ? <LoggedNavbar /> : null}
        <main>{children}</main>
        <Footer />
        {isBottomNavigation ? <BottomNavigation /> : null}
      </div>
    </app-root>
  );
};

export default Layout;
