import React from 'react';
import './Avatar.css'; // Importing the CSS for styling

const Avatar = ({ imageUrl }) => {
  return (
    <div className="avatar-container">
      <img src={imageUrl} alt="User Avatar" className="avatar-image" />
    </div>
  );
};

export default Avatar;
