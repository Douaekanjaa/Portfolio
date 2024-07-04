// NavigationLink.js

import { useNavigation } from "next/navigation"; // Import from next/navigation

const NavigationLink = ({ href, children }) => {
  const navigation = useNavigation(); // Use useNavigation hook

  const handleClick = (e) => {
    e.preventDefault();
    navigation.navigate(href); // Use navigate method from useNavigation
  };

  return (
    <a href={href} onClick={handleClick} className="navigation-link">
      {children}
    </a>
  );
};

export default NavigationLink;
