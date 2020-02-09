import React from 'react';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src='https://i.imgur.com/KDIDiSE.png' />
        <div>
          <span>Meu perfil</span>
          <i className='mateiral-icons'>account_circle</i>
        </div>
      </header>
    );
  }
}

export default Header;
