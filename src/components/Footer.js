import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>© 2018 Slices Pizza<span role='img' aria-label='pizza'> 🍕🍕🍕 Built by <a href='https://github.com/Peri2312' target="_blank" rel="noopener noreferrer">Peri Patel-2010283</a></span></p>
    </Menu.Item>
  </Menu>
);

export default Footer;
