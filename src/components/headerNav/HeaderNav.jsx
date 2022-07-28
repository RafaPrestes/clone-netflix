import React from 'react'
import './headerNav.css'

const HeaderNav = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="logo netflix" />
          </a>  
        </div>
        <div className="header--user">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuario" />
            </a>
        </div>
    </header>
  )
}

export default HeaderNav