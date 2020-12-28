import React from "react";

const AvatarPlaceholder = ({ url }) => {
  let bg =
    'url("https://img.fantrax.com/assets/images/icons/profile__placeholder.svg")';

  if (url) {
    bg = 'url("' + window.assetPath + "/" + url + '")';
  }

  return (
    <figure
      style={{
        backgroundImage: bg
      }}
    />
  );
};

export default AvatarPlaceholder;
