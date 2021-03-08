import React from 'react';
import {Link} from 'react-router-dom';
import socialpic from '../../images/having-fun-web-300x300.jpg';
import servicepic from '../../images/2015-09-16_1930-web-300x300.jpg';
import spiritualpic from '../../images/bridges-ladies-smiling-web-300x300.jpg';
import leadershippic from '../../images/bridges-ladies-smiling-web-300x300.jpg';

function Service() {
  return (
    <div className="main__service">
      <div className="service__container">
        <div className="service__block">
          <Link className="service__link" to="/events">
            <p className="service__title">Social</p>
            <figure className="service__figure">
              <img className="service__img" src={socialpic} alt="" />
              <figcaption className="service__figcaption">Do you want to make some friends? This is the place for you! Join our Facebook page and join the fun.</figcaption>
            </figure>
          </Link>
        </div>
        <div className="service__block">
          <Link className="service__link" to="/volunteering">
            <p className="service__title">Services</p>
            <figure className="service__figure">
              <img className="service__img" src={servicepic} alt="" />
              <figcaption className="service__figcaption">Is life in America challenging? This is the place for you. Please contact us so that we can help.</figcaption>
            </figure>
          </Link>
        </div>
        <div className="service__block">
          <Link className="service__link" to="/getinvolved">
            <p className="service__title">Spiritual</p>
            <figure className="service__figure">
              <img className="service__img" src={spiritualpic} alt="" />
              <figcaption className="service__figcaption">Do you want to share your spiritual story with a small group of people? Click here to join the discussion!</figcaption>
            </figure>
          </Link>
        </div>
        <div className="service__block">
          <Link className="service__link" to="/getinvolved">
            <p className="service__title">Leadership</p>
            <figure className="service__figure">
              <img className="service__img" src={leadershippic} alt="" />
              <figcaption className="service__figcaption">Do you want to get more involved and be part of this community? Check our Facebook page.</figcaption>
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Service;