import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ContactForm from '../components/ContactForm';
import mobile from '../assets/images/mobile.jpg'
import web from '../assets/images/web.jpg'
import dt from '../assets/images/dt.jpg'
import uiux from '../assets/images/uiux.jpg'

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            WHO WE ARE
          </h2>
          <p>
            We are a software development company that provides cutting edge engineering solutions for your mobile and web application needs we will help you and your clients untangle complex issues that always emerge during your digital evolution journey.
            <br />
            We started our journey in 2020 and all along our aim is to be a visionary and a reliable software engineering partner for you.
          </p>
        </header>
      </div>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>SERVICES</h2>
          <p>
            Give us a problem we'll provide a solution for it.
          </p>
        </header>

        <Container fluid="md" class= "flex justify-center">
          <Row>
            <Col>
              <div className="box">
                <div className="imgBox">
                  <img src={mobile} alt="mobile development"/>
                </div>
                <div className="details">
                  <div className="content">
                    <h3>MOBILE DEVELOPMENT</h3>
                    <p>
                      We will create an impactful mobile app that fits your brand and industry within a shorter time frame.
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="box">
                <div className="imgBox">
                  <img src={web} alt="web development"/>
                </div>
                <div className="details">
                  <div className="content">
                    <h3>WEB DEVELOPMENT</h3>
                    <p>
                      Our bold design style & use of standards-based markup code combine to produce websites that boast exceptional search engine result positions & superior visitor loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid="md" class= "flex justify-center">
          <Row>
            <Col>
              <div className="box">
                <div className="imgBox">
                  <img src={uiux} alt="UI/UX Design"/>
                </div>
                <div className="details">
                  <div className="content">
                    <h3>UI/UX DESIGN</h3>
                    <p>
                      Build the product you need on time with an experienced team that uses clear and effective design processes.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="box">
                <div className="imgBox">
                  <img src={dt} alt="digital transformation"/>
                </div>
                <div className="details">
                  <div className="content">
                    <h3>Digital Transformation</h3>
                    <p>
                      Our expertise, platforms, and skills allow us to deliver superior IT transformation services tailored to stay ahead of evolving market demands.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Contact Us</h2>
          <p>+254*********</p>
          <p>example@example.com</p>
        </header>
        <ContactForm />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
