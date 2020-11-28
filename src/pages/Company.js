import React from 'react';

import Layout from '../components/Layout';
// import lightslider from '../assets/sass/lightslider.css'
// import slider from '../assets/sass/lightslider'

import ben from '../assets/images/ben.jpeg';
import okuro from '../assets/images/okuro.jpg';
import linda from '../assets/images/Linda.jpg';
import charles from '../assets/images/charles.jpg';
import jack from '../assets/images/jack.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About Appr</h2>
        <p>Appr is a Software Development company specialised in building efficient web and android applications.
            <br/>
            We began in 2020 with a mission to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation.
            Whether it is a consumer-oriented app or a transformative enterprise-class solution, the company leads the process from ideation and concept to delivery
        </p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Team</h3>
          <div className="team">
            <div className="carousel">
              <section className="slider">
                <p className="ben" ></p>
                <img src={ben} alt="mwangi" className="model"/>
                <div className="dsc">
                  <p className="name">Ben Ruwel </p>
                </div>
              </section>
              <section className="slider">
                <p className="okuro" ></p>
                <img src={okuro} alt="gideon" className="model" />
                <div className="dsc">
                  <p className="name">Gideon Okuro</p>
                </div>
              </section>
              <section className="slider">
                <p className="ben"></p>
                <img src={linda} alt="tonui" className="model"/>
                <div className="dsc">
                  <p className="name">Linda Tonui</p>
                </div>
              </section>
              <section className="slider">
                <p className="ben"></p>
                <img src={charles} alt="okoba" className="model"/>
                <div className="dsc">
                  <p className="name">Charles Okoba</p>
                </div>
              </section>
              <section className="slider">
                <p className="ben" ></p>
                <img src={jack} alt="oyugi" className="model"/>
                <div className="dsc">
                  <p className="name">Jack Oyugi</p>
                </div>
              </section>
            </div>
          </div>

          <div className="controls">
            <span className="arrow prev">Prev</span>
            <span className="arrow next">Next</span>
          </div>

          <p>
            Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
            amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
            id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
            Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
            Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna,
            sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere
            leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse
            id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor
            consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec
            felis elementum varius.
          </p>

          <hr />

          <h4>Feugiat aliquam</h4>
          <p>
            Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec
            varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia
            tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in
            tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean
            erat diam, tempus aliquet erat.
          </p>

          <p>
            Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus
            rutrum cursus velit, eget condimentum nunc blandit vel. In at
            pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget,
            fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra
            commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim
            vel, posuere finibus justo. Vivamus facilisis maximus nibh quis
            pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum.
            Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
