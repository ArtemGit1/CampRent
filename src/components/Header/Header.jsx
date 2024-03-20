import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderComponent, HeaderList, NavigationButton } from './Header.styled';

const Header = () => {
  return (
    <HeaderComponent>
        <HeaderList>
          <li><Link to="/"><NavigationButton>About Us</NavigationButton></Link></li>
          <li><Link to="/page1"><NavigationButton>Catalog</NavigationButton></Link></li>
          <li><Link to="/page2"><NavigationButton>Favorites</NavigationButton></Link></li>
        </HeaderList>
    </HeaderComponent>
  );
};

export default Header;
