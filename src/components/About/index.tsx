import React from 'react';
import '../../styles/about.scss';
import bridgesimage from '../../images/cropped-horizontal_color-01.png';
import goff from '../../images/goff.jpg';
import daisy from '../../images/daisy.jpg';
import davis from '../../images/davis.jpg';
import smith from '../../images/smith.jpg';

function About() {
  return (
    <section className="main">
      <div className="main__block">
        <h1 className="main__title">About Us</h1>
        <div className="main__container">
          <div className="main__container-picture">
            <img src={bridgesimage} alt="" className="main__image" />
          </div>
          <div className="main__container-description">
            <h2 className="main__subheader">What is Bridges?</h2>
            <p className="main__paragraph">Austin Bridges is the local expression of Bridges International, a non-profit student organization that seeks to serve and resource the international student community on university campuses throughout the country. We help international students by offering practical service, facilitating social connections, and providing spiritual resources.</p>
            <p className="main__paragraph">We at Austin Bridges are a community of internationals and Americans, students and community members who desire to encourage and help international students have positive experience in college. At the University of Texas, we provide opportunities such as a weekly conversation club, service opportunities, seminars that address relevant issues, and small groups to help students connect and grow together. Many of us have found our inspiration for these things from Jesus, but we welcome people from all nationalities, cultures, and faiths. In fact, we think diversity is a our strength! We hope you join us!</p>
          </div>
        </div>
      </div>
      <div className="member">
        <h2 className="member__title">Our Members</h2>
        <div className="goff__name">
          <h4 className="goff__fullname">MEAGIN AND KERBY GOFF</h4>
        </div>
        <img className="goff__picture" src={goff} alt=""/>
        <div className="goff__description">
          <h3 className="goff__position">Austin Bridges Director</h3>
          <p className="goff__paragraph">We serve with Bridges International, our international student ministry. Kerby is the campus director at The University of Texas at Austin, and Meagin is a new staff member on the UT Bridges team. We recently got married on August 10 and are excited to serve together with Bridges at UT! With nearly 6,000 international students at UT, we have a great opportunity to help make disciples of all nations without having to fly around the world!</p>
        </div>
        <div className="xu__description">
          <img className="xu__picture" src={daisy} alt=""/>
          <h3 className="xu__position">Austin Ministry</h3>
          <p className="xu__paragraph">When I first arrived in America, my life was totally a mess. I was kind of lost, focusing on wrong things, always wanting to party or drink, always feeling like the life in America is so boring. But once I came to know Jesus, He totally changed my life. I used to only care about myself with little regard for others, now desire to help others as well as introduce them to Jesus. As I have grown my relationship with the Lord, I even learned how to share my faith and help new believers grow in their walk with God. It has been exciting to see God use me to reach others with Gospel.</p>
        </div>
        <div className="xu__name">
          <h4 className="xu__fullname">DAISY A XU</h4>
        </div>
        <div className="davis__name">
          <h4 className="davis__fullname">GREG AND JEAN DAVIS</h4>
        </div>
        <img className="davis__picture" src={davis} alt=""/>
        <div className="davis__description">
          <h3 className="davis__position">Austin Ministry</h3>
          <p className="davis__paragraph">Serving with Bridge International, the international student ministry of Cru, in Austin, Texas.</p>
        </div>
        <div className="smith__description">
          <img className="smith__picture" src={smith} alt=""/>
          <h3 className="smith__position">Operations team</h3>
          <p className="smith__paragraph">Bridges International is making every effort to reach out to the over 1 million international students that come to America each year to study. The Lord has brought our family to Austin, Texas to serve with Bridges International on a local and national level- Adam serves on the Operations team in our national office, and Kimi serves with the local Bridges ministry at the University of Texas.</p>
        </div>
        <div className="smith__name">
          <h4 className="smith__fullname">ADAM AND KIMIKO SMITH</h4>
        </div>
      </div>
    </section>
  );
}

export default About;
