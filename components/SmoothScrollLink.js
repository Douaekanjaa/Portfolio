// components/SmoothScrollLink.js
import React from 'react';

const SmoothScrollLink = ({ href, children, className }) => {
  const handleScroll = (event) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={href} className={className} onClick={handleScroll}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
