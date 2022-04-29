import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../assets/project-courses.jpg'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

export function Counter() {

  return (
    <body>
      <main>
        <header>
          <div className="content-wrap">
            <h1>Christina Truong</h1>
            <h2>Tech Educator + Front-end Developer</h2>

            <p>As a developer, I specialize in creating modular and scalable front-end architectures. As an educator, I focus on creating inclusive learning environments, instructor training and curriculum development.</p>
            <p>I’m also exploring more creative pursuits designing tee shirts and accessories for <a href="http://teethang.com" target="_blank">Nuthin’ But a Tee Thang</a>, an online store I’m running with my husband.</p>
          </div>
        </header>

        <section className="projects">
          <div className="content-wrap divider">
            <h2>Featured Projects</h2>
            <p>View selected projects below. More information can be found at <a href="http://christinatruong.com">christinatruong.com</a>.</p>

            <section className="project-item">
              <img src="./../../assets/project-courses.jpg" alt="Lynda & LinkedIn Learning course list" />
              <h3>Lynda / LinkedIn Learning Courses</h3>
              <p>Developed content and instruction for various CSS and front-end focused web development courses including CSS Essential Training, Getting Your Website Online, Design Systems & Architectures and more.</p>
              <a className="btn" href="https://www.linkedin.com/learning/instructors/christina-truong?u=2125562" target="_blank">LinkedIn Learning</a>
              <a className="btn" href="https://www.lynda.com/Christina-Truong/7842227-1.html">Lynda.com</a>
            </section>

            <section className="project-item">
              <img src="./../../assets/project-women-tech.jpg" alt="Women and Tech website" />
              <h3>Women&&Tech</h3>
              <p>Women&&Tech was launched in 2012 to feature interviews with different women working in the tech industry. I became familiar with them when I was invited to be one of the interviewees! A few years later, I joined the team and helped with the relaunch of the site as the front-end architect.</p>
              <a className="btn" href="http://christinatruong.com/projects/women-and-tech-redesign.html" target="_blank">View the case study</a>
            </section>

            <section className="project-item">
              <img src="./../../assets/project-wire-ipsum.jpg" alt="The Wire Ipsum website" />
              <h3>The Wire Ipsum</h3>
              <p>After coming back from teaching a JavaScript workshop, I felt inspired to create something just for fun. I realized that of all the content/lorem ipsum generators available, there was nothing for HBO’s The Wire fans. I searched for <a href="http://thewireipsum.com" target="_blank">thewireipsum.com</a> domain and it was available! Generate some content for your projects today.</p>
              <a className="btn" href="http://thewireipsum.com" target="_blank">View live site</a>
            </section>
          </div>
        </section>

        <section className="work-experience">
          <div className="content-wrap item-details divider">
            <h2>Work Experience</h2>
            <p>See my complete work history on <a href="https://www.linkedin.com/in/christinatruong/">LinkedIn</a>.</p>

            <section className="job-item">
              <div className="job-details">
                <h3>Front-end Developer & Educator</h3>
                <p>Freelance</p>
                <p>July 2006-Present</p>
              </div>
              <div className="job-summary">
                <p>Provides various front-end related services ranging from development work, speaking engagements, instructor training, workshops, and curriculum development. See more at  <a href="http://christinatruong.com">christinatruong.com</a>.</p>
              </div>
            </section>

            <section className="job-item">
              <div className="job-details">
                <h3>Director of Curriculum</h3>
                <p>Ladies Learning Code</p>
                <p>July 2014 - February 2016</p>
              </div>
              <div className="job-summary">
                <p>Managed all curriculum for the adult programs. Created teaching materials and implemented instructor training across 20+ Canadian chapters.</p>
                <p>Key contributions:</p>
                <ul>
                  <li>Overhauled the curriculum and standardized the content and delivery.
                    <ul>
                      <li>Created 9 new workshops focusing on HTML, CSS, JavaScript, jQuery, Wordpress and Responsive Web Design.</li>
                      <li>Created all Hackapalooza content (2 day conference style event) consisting of 2-4 hour workshop sessions.</li>
                      <li>Created interactive slide deck template for consistent national workshop branding.</li>
                      <li>Developed the Digital Skills part-time program curriculum.</li>
                    </ul>
                  </li>
                  <li>Provided training for all instructors focusing on creating an inclusive and engaging learning environment.</li>
                  <li>Maintained the ladieslearningcode.com website.</li>
                  <li>Volunteer lead instructor from 2011-2014 for Toronto workshops and several chapter launches.</li>
                </ul>
              </div>
            </section>

            <section className="job-item">
              <div className="job-details">
                <h3>Lead Front-End Developer</h3>
                <p>Field iD</p>
                <p>March 2013 - February 2014</p>
              </div>
              <div className="job-summary">
                <p>Lead the front-end development for the in-house safety inspection software.</p>
                <p>Key contributions:</p>
                <ul>
                  <li>Responsible for setting code standards for the front-end development.</li>
                  <li>Created a fully customized front-end framework, including the UI/UX design.</li>
                  <li>Standardized the site architecture and design.</li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        <section className="education">
          <div className="content-wrap item-details">
            <h2>Education</h2>

            <section>
              <h3>Seneca College - Toronto, ON</h3>
              <p>Webmaster Content Site Design Certificate, 2006</p>
              <p>14 week full-time program covering HTML, CSS, Flash, Photoshop, PHP and JavaScript.</p>
            </section>

            <section>
              <h3>York University - Toronto, ON</h3>
              <p>Bachelor of Arts with Honours, 2001-2005</p>
              <p>Double Major in Communications & Psychology.</p>
            </section>

            <section>
              <h3>San Jose State University - San Jose, CA</h3>
              <p>General Studies, 2000</p>
            </section>
          </div>
        </section>

        <footer>
          <div className="content-wrap">
            <h2>Let's Keep in Touch!</h2>

            <ul className="contact-list">
              <li><a href="mailto:email@example.com">email@example.com</a></li>
              <li><a href="http://christinatruong.com" target="_blank">christinatruong.com</a></li>
              <li><a href="http://twitter.com/christinatruong" target="_blank">Twitter</a></li>
              <li><a href="#" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </footer>
      </main>
    </body>
  );
}
