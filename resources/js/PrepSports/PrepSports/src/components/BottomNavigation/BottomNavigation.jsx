import React, { useState, useContext } from 'react';
import { IsLoggedContext } from '../../state/IsLogged';
import cn from 'classnames';
import ChatExpand from './Tabs/ChatExpand';
import NotificationsExpand from './Tabs/NotificationsExpand';
import BurgerExpand from './Tabs/BurgerExpand';

const BottomNavigation = () => {
  const { isLogged } = useContext(IsLoggedContext);
  const [isNotifications, setIsNotifications] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const [isBurger, setIsBurger] = useState(false);

  const navStyle = () => {
    if (isNotifications || isChat || isBurger) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  };

  const handleMainPageClick = () => {
    setIsNotifications(false);
    setIsChat(false);
    setIsBurger(false);
  };

  const handleNotificationsClick = () => {
    setIsNotifications(true);
    setIsChat(false);
    setIsBurger(false);
  };

  const handleChatClick = () => {
    setIsNotifications(false);
    setIsChat(true);
    setIsBurger(false);
  };
  const handleBurgerClick = () => {
    setIsNotifications(false);
    setIsChat(false);
    setIsBurger(true);
  };

  const closeNav = () => {
    setIsNotifications(false);
    setIsChat(false);
    setIsBurger(false);
  };

  return (
    <>
      <bottom-nav>
        <div className="bottom-nav-overlay" style={navStyle()}>
          {isNotifications && <NotificationsExpand isLogged={isLogged} />}
          {isChat && <ChatExpand isLogged={isLogged} />}
          {isBurger && <BurgerExpand closeNav={closeNav} isLogged={isLogged} />}
        </div>
        <nav className="bottom-nav">
          <button
            onClick={handleMainPageClick}
            className={cn('mat-ripple bottom-nav__item bottom-nav__item--app', {
              active: !isNotifications && !isBurger && !isChat,
            })}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12.423,8.424c1.011,0 1.964,-0.848 2.1,-1.873c0.137,-1.025 -0.583,-1.874 -1.594,-1.874c-1.011,0 -1.964,0.848 -2.1,1.874c-0.136,1.025 0.564,1.873 1.594,1.873Z"></path>
              <path d="M8.805,3.856l0.038,-0.348l-2.746,0l-0.038,0.348c-0.515,3.753 0.858,6.132 2.117,7.467c1.335,1.431 2.823,1.992 2.899,2.012l0.038,0.019c4.883,1.586 4.101,6.558 4.063,6.771l-0.058,0.348l1.374,0.019l1.373,0l0.057,-0.348c0.057,-0.445 0.248,-2.031 -0.229,-3.85c-0.496,-1.915 -1.831,-4.449 -5.397,-5.609c-0.248,-0.097 -4.177,-1.761 -3.491,-6.829Zm11.33,0l0.038,-0.348l-2.747,0l-0.038,0.348c-0.381,2.786 -1.831,4.546 -3.204,5.61c0.954,0.367 1.736,0.832 2.365,1.373c1.488,-1.412 3.3,-3.571 3.586,-6.983Zm-10.586,10.833c-0.057,-0.019 -1.087,-0.406 -2.193,-1.335c-0.897,0.851 -1.641,1.838 -2.232,2.94c-0.953,1.8 -1.22,3.405 -1.259,3.85l-0.038,0.348l2.747,0l0.038,-0.367c0.019,-0.136 0.362,-3.27 3.109,-5.378c-0.038,-0.019 -0.077,-0.019 -0.115,-0.039l-0.057,-0.019Z"></path>
            </svg>
          </button>
          <button
            onClick={handleNotificationsClick}
            className={cn('mat-ripple bottom-nav__item', {
              active: isNotifications,
            })}
          >
            <svg viewBox="0 0 24 24">
              <path d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z"></path>
            </svg>
          </button>
          <button
            onClick={handleChatClick}
            className={cn('mat-ripple bottom-nav__item', {
              active: isChat,
            })}
          >
            <svg viewBox="0 0 24 24">
              <path d="M4,2A2,2 0 0,0 2,4V17L6,13H15A2,2 0 0,0 17,11V4A2,2 0 0,0 15,2H4M4,4H15V11H6L4,13V4M19,6V8H20V18L18,16H8V15H6V16A2,2 0 0,0 8,18H18L22,22V8A2,2 0 0,0 20,6H19Z"></path>
            </svg>
          </button>
          <button
            onClick={handleBurgerClick}
            className={cn('mat-ripple bottom-nav__item', {
              active: isBurger,
            })}
          >
            <svg viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
            </svg>
          </button>
        </nav>
      </bottom-nav>
    </>
  );
};

export default BottomNavigation;
