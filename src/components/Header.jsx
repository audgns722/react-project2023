import React from 'react'
import { useState } from 'react'
import { headerNav } from '../constants'

const Header = () => {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  }

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">Hun's <em>portfolio</em><br /><i>react.ver</i></a>
        </div>
        <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "flase"}
          role="button"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header