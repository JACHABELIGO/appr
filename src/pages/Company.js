import React from 'react';

import Layout from '../components/Layout';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ben from '../assets/images/ben.jpeg';
import okuro from '../assets/images/okuro.jpg';
import linda from '../assets/images/Linda.jpg';
import charles from '../assets/images/charles.jpg';
import jack from '../assets/images/jack.jpg';
import health from '../assets/images/healthcare.svg';
import agric from '../assets/images/agriculture.svg';
import edu from '../assets/images/education.svg';
import ngo from '../assets/images/ngo.svg';
import store from '../assets/images/store.svg';
import move from '../assets/images/moving.svg';

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
          <h2 class= "flex justify-center">Team</h2>
         
          <Carousel>
            <Carousel.Item interval={2000}>
            <figure class="bg-gray-100 rounded-xl p-8">
                 <img class="w-32 h-32 rounded-full mx-auto" src={ben} alt="" width="404" height="532"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                     <p class="text-lg text-black font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-black">
                        Ben Ruwel
                      </div>
                    <div class="text-gray-500">
                      Software Engineer
                    </div>
                    </figcaption>
                  </div>
                </figure>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
               <figure class="bg-gray-100 rounded-xl p-8">
                 <img class="w-32 h-32 rounded-full mx-auto" src={okuro} alt="" width="404" height="532"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                   <p class="text-lg text-black font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-black">
                        Gideon Okuro
                      </div>
                    <div class="text-gray-500">
                      Software Engineer
                    </div>
                    </figcaption>
                  </div>
                </figure>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <figure class="bg-gray-100 rounded-xl p-8">
                 <img class="w-32 h-32 rounded-full mx-auto" src={linda} alt="" width="404" height="532"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                   <p class="text-lg text-black font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-black">
                        Linda Tonui
                      </div>
                    <div class="text-gray-500">
                      Software Engineer
                    </div>
                    </figcaption>
                  </div>
                </figure>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <figure class="bg-gray-100 rounded-xl p-8">
                 <img class="w-32 h-32 rounded-full mx-auto" src={charles} alt="" width="404" height="532"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                   <p class="text-lg text-black font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-black">
                        Charles Okoba
                      </div>
                    <div class="text-gray-500">
                      Software Engineer
                    </div>
                    </figcaption>
                  </div>
                </figure>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <figure class="bg-gray-100 rounded-xl p-8">
                 <img class="w-32 h-32 rounded-full mx-auto" src={jack} alt="" width="404" height="532"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                   <p class="text-lg text-black font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-black">
                        Jack Oyugi
                      </div>
                    <div class="text-gray-500">
                      Software Engineer
                    </div>
                    </figcaption>
                  </div>
                </figure>
            </Carousel.Item>
          </Carousel>

          <hr />

          <h2 class= "flex justify-center" >Industries</h2>
          <p class="text-black"> Appr brings the best from the software world to your industry.
            We can help you build impactful software solutions for your industry faster than ever before.</p>

          <p class="text-black">
            We have had experience working in projects from these industries:
          </p>
            <br/>
            <Container fluid="md" >
              <Row>
                <Col>
                  <img class="w-32 h-32 rounded-full mx-auto" src={health} alt="" width="250" height="350"/>
                  <br/>
                  <p  class= "flex justify-center text-black">Healthcare</p>
                </Col>
                <Col>
                  <img class="w-32 h-32 rounded-full mx-auto" src={agric} alt="" width="250" height="350"/>
                  <br/>
                  <p class= "flex justify-center text-black">Agriculture</p>
                </Col>
                <Col>
                  <img class="w-32 h-32 rounded-full mx-auto" src={ngo} alt="" width="250" height="350"/>
                  <br/>
                  <p class= "flex justify-center text-black">NGO</p> 
                </Col>
              </Row>
            </Container>
            <br/>
            <Container fluid="md">
              <Row>
                  <Col>
                    <img class="w-32 h-32 rounded-full mx-auto" src={edu} alt="" width="250" height="350"/>
                    <br/>
                    <p class= "flex justify-center text-black">Education</p>
                  </Col>
                  <Col>
                    <img class="w-32 h-32 rounded-full mx-auto" src={store} alt="" width="250" height="350"/>
                    <br/>
                    <p class= "flex justify-center text-black">Retail</p>
                  </Col>
                  <Col>
                    <img class="w-32 h-32 rounded-full mx-auto" src={move} alt="" width="250" height="350"/>
                    <br/>
                    <p class= "flex justify-center text-black">Transport</p>
                  </Col>
                </Row>
              </Container>
          
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
