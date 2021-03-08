import React from 'react';
import Service from './service';
import maxresdefault from '../../images/maxresdefault.jpg';

function Home() {
  return (
    <section className="main">
      <div className="main__bar">
        <img className="main__bar-image" src={maxresdefault} />
      </div>
      <div className="main__welcome">
        <div className="welcome__container">
          <h2 className="welcome__title">Welcome to Austin Bridges online!</h2>
          <p className="welcome__description">Austin Bridges is the local expression of Bridges International, a non-profit student organization that seeks to serve and resource the international student community on university campuses throughout the country. We help international students by offering; practical service, facilitating social connections, and providing spiritual resources.</p>
          <div className="welcome__carousel"></div>
        </div>
      </div>
      <Service />
    </section>
  );
}

export default Home;
