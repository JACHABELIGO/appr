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
          <h3>Team</h3>
         
          <Carousel>
            <Carousel.Item interval={1000}>
            <figure class="bg-gray-100 rounded-xl p-8">
                 <img class="w-32 h-32 rounded-full mx-auto" src={ben} alt="" width="384" height="512"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                     <p class="text-lg font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-cyan-600">
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
                 <img class="w-32 h-32 rounded-full mx-auto" src={okuro} alt="" width="384" height="512"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                     <p class="text-lg font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-cyan-600">
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
                 <img class="w-32 h-32 rounded-full mx-auto" src={linda} alt="" width="384" height="512"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                     <p class="text-lg font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-cyan-600">
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
                 <img class="w-32 h-32 rounded-full mx-auto" src={charles} alt="" width="384" height="512"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                     <p class="text-lg font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-cyan-600">
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
                 <img class="w-32 h-32 rounded-full mx-auto" src={jack} alt="" width="384" height="512"/>
                 <div class="pt-6 text-center space-y-4">
                   <blockquote>
                     <p class="text-lg font-semibold">
                       “Tailwind CSS is the only framework that I've seen scale 
                       on large teams. It’s easy to customize, adapts to any design,
                       and the build size is tiny.”
                      </p>
                    </blockquote>
                    <figcaption class="font-medium">
                      <div class="text-cyan-600">
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
