import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './styles/app.scss';
import braustintx from './images/braustintx.png';
import Home from './components/Home/index';
import About from './components/About';

function App() {
  return (
    <div className="container">
      <header className="header">
        <nav className="site-navigation">
          <ul className="site-navigation__list">
            <li className="site-navigation__item">
              <NavLink to="/about" className="site-navigation__link">About</NavLink>
            </li>
            <li className="site-navigation__item">
              <NavLink to="/volunteering" href="www.sd.com" className="site-navigation__link">Volunteering with us</NavLink>
            </li>
            <li className="site-navigation__item">
              <NavLink to="/" className="site-navigation__link">
                <img src={braustintx}
                  className="site-navigation__logo"
                  alt="Bridges International Austin"
                  title="Bridges International Austin"/>
              </NavLink>
            </li>
            <li className="site-navigation__item">
              <NavLink to="/events" className="site-navigation__link">News & Events</NavLink>
            </li>
            <li className="site-navigation__item">
              <NavLink to="/getinvolved" className="site-navigation__link">Get Involved as An Student</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
      <footer className="footer">
        <div className="footer__arrow">
          <a href="#" id="buttonup" className="footer__arrow-link">
            <i className="fas fa-angle-up footer__arrow-up"></i>
          </a>
        </div>
        <ul className="footer__social">
          <li className="footer__item">
            <a href="https://www.facebook.com/groups/utxbridge" title="UT Austin" target="_blank" rel="noopener noreferrer" className="footer__link">
              <i className="fab fa-facebook-square footer__icon"></i>
              UT Facebook Group
            </a>
          </li>
          <li className="footer__item">
            <a href="https://www.facebook.com/groups/728550270496782/" title="ACC" target="_blank" rel="noopener noreferrer" className="footer__link">
              <i className="fab fa-facebook-square footer__icon"></i>
              ACC Facebook Group
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          <p className="footer__org">© Bridges International Austin 2021</p>
          <p className="footer__author">Powered by Kevin Angeles</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
