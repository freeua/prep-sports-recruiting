import React from 'react';

const ProfileTab = ({ text, index, length, current, setCurrentTab }) => {
  const getLeft = () => {
    return index * -10 + 'px';
  };

  const getZIndex = () => {
    return length - index;
  };

  return (
    <div
      onClick={() => setCurrentTab(text)}
      className={`tabLink curve2200 ${current === text && 'tabLinkOn'}`}
      style={{
        position: 'relative',
        left: getLeft(),
        zIndex: getZIndex(),
      }}
    >
      <p>
        <span
          style={{ fontSize: '14px', color: '#446283' }}
          role="link"
          className="myriadTab"
        >
          {text}
        </span>
      </p>
    </div>
  );
};

export default ProfileTab;
