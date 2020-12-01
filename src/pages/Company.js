import React from 'react';

import Layout from '../components/Layout';
import Carousel from 'react-bootstrap/Carousel'

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
          <h2>Team</h2>
         
          <Carousel>
            <Carousel.Item interval={1000}>
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
            <Carousel.Item interval={1000}>
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
            <Carousel.Item>
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
            <Carousel.Item>
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
            <Carousel.Item>
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

          <h2>Industries</h2>
          <p class="text-black"> Appr brings the best from the software world to your industry.
            We can help you build impactful software solutions for your industry faster than ever before.</p>

          <p class="text-black">
            We have had experience working in projects from these industries:
            <br/>
            <div class="text-black">
              <ul>
                <li class="text-black">Healthcare</li>
                <li class="text-black">Education</li>
                <li class="text-black">Construction</li>
                <li class="text-black">Agriculture</li>
              </ul>           
            </div>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
