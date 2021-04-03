import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import './styles/app.scss';
import braustintx from './images/braustintx.png';
import Home from './components/Home/index';
import About from './components/About';

function App() {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [stickyNavigation, setStickyNavigation] = useState(false);
  const [stickyNavigationList, setStickyNavigationList] = useState(false);
  const [stickyNavigationLink, setStickyNavigationLink] = useState(false);
  const [stickyLogo, setStickyLogo] = useState(false);
  let headerRef = useRef();
  useEffect(() => {
    const node = headerRef.current as any;
    console.log(node);
    //console.log(node.offsetTop); 
    // const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

  }, [headerRef]);
  // const handleScroll = (e:any) => {
  //   console.log("hereee");
  //   if(bottom) {
  //     console.log("bottom reached");
  //   } else {
  //     console.log("normal");
  //   }
  // }

  let eventTimeout: any | null = null;
  const scrollHandler = (ev: any) => {
    if (window.scrollY <= 80) {
      setStickyHeader(false);
      setStickyNavigation(false);
      setStickyNavigationList(false);
      setStickyNavigationLink(false);
      setStickyLogo(false);
    } else {
      setStickyHeader(true);
      setStickyNavigation(true);
      setStickyNavigationList(true);
      setStickyNavigationLink(true);
      setStickyLogo(true);
    }
  }
  const eventThrottler = (ev: any) => {
    if (!eventTimeout) {
      eventTimeout = setTimeout(() => {
        eventTimeout = null;
        scrollHandler(ev);
      }, 250);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', eventThrottler);
    return () => window.removeEventListener('scroll', eventThrottler);
  }, []);
  return (
    <div className="container">
      <header className={`header ${stickyHeader ? 'header--sticky' : ''}`} ref={headerRef.current}>
        <nav className={`site-navigation ${stickyNavigation ? 'site-navigation--sticky' : ''}`}>
          <ul className={`site-navigation__list ${stickyNavigationList ? 'site-navigation__list--sticky' : ''}`}>
            <li className="site-navigation__item">
              <NavLink to="/about" className={`site-navigation__link ${stickyNavigationLink ? 'site-navigation__link--sticky' : ''}`}>About</NavLink>
            </li>
            <li className="site-navigation__item">
              <NavLink to="/volunteering" href="www.sd.com" className={`site-navigation__link ${stickyNavigationLink ? 'site-navigation__link--sticky' : ''}`}>Volunteering with us</NavLink>
            </li>
            <li className="site-navigation__item">
              <NavLink to="/" className={`site-navigation__link ${stickyNavigationLink ? 'site-navigation__link--sticky' : ''}`}>
                <img src={braustintx}
                  className={`site-navigation__logo ${stickyLogo ? 'site-navigation__logo--sticky' : ''}`}
                  alt="Bridges International Austin"
                  title="Bridges International Austin" />
              </NavLink>
            </li>
            <li className="site-navigation__item">
              <NavLink to="/events" className={`site-navigation__link ${stickyNavigationLink ? 'site-navigation__link--sticky' : ''}`}>News & Events</NavLink>
            </li>
            <li className="site-navigation__item">
              <NavLink to="/getinvolved" className={`site-navigation__link ${stickyNavigationLink ? 'site-navigation__link--sticky' : ''}`}>Get Involved as An Student</NavLink>
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
          <Link to="#" id="buttonup" className="footer__arrow-link" onClick={ev => window.scroll({ top: 0, behavior: 'smooth' })}>
            <i className="fas fa-angle-up footer__arrow-up"></i>
          </Link>
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
