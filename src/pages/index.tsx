import React from 'react';
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// @ts-ignore
import Resume from '../../static/documents/Minhazur_Rahaman_Resume.pdf'

export default () =>
    <Layout>
        <div className="intro-container">
            <div className="intro">
                <h1>Full Stack Developer</h1>
                <p>Making scalable and reliable applications </p>
                <a href={Resume} target="_blank">Download Resume</a>
            </div>
            <div className="contact">
                <a href="https://github.com/minhazur9" target="_blank" >
                    <FontAwesomeIcon icon={faGithub} size='5x' className="github-icon" />
                </a>
                <div className="break"></div>
                <a href="https://www.linkedin.com/in/mindev22/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size='5x' className="linkedin-icon" />
                </a>
                <a href="mailto:minhazur190@gmail.com" >
                    <FontAwesomeIcon icon={faEnvelope} size='5x' className="email-icon" />
                </a>

            </div>
        </div>
        <div className="skills">
            <div className="skill-cols">
                <div className="skill-cat" >
                    <h4>Languages</h4>
                    <div className="list-table">
                        <p>JavaScript</p>
                        <p>Python</p>
                        <p>TypeScript</p>
                        <p>HTML</p>
                        <p>SQL</p>
                        <p>NoSQL</p>
                        <p>CSS</p>
                        <p>SCSS</p>
                        <p>Java</p>
                        <p>C++</p>
                        <p>PHP</p>
                    </div>
                </div>
                <div className="skill-cat" >
                    <h4>Libaries & Frameworks</h4>
                    <div className="list-table">
                        <p>React.js</p>
                        <p>Redux</p>
                        <p>Node.js</p>
                        <p>Express.js</p>
                        <p>MongoDB</p>
                        <p>PostgreSQL</p>
                        <p>GraphQL</p>
                        <p>Apollo</p>
                        <p>Bootstrap.css</p>
                        <p>Materialize.css</p>
                        <p>ReactGatsby</p>
                    </div>
                </div>
                <div className="skill-cat" >
                    <h4>Tools</h4>
                    <div className="list-table">
                        <p>Git</p>
                        <p>Apache</p>
                        <p>Heroku</p>
                        <p>Jira</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
