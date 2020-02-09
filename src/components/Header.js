import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header style={{ backgroundColor: '#4A90E2' }}>
        <nav>
          <img src='https://i.imgur.com/KDIDiSE.png' />
          <div>
            <span>Meu perfil</span>
            <i className='mateiral-icons'>account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
