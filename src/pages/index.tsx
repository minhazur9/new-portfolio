import React from 'react';
import Layout from '../components/Layout'

export default () =>
    <Layout>
        <div className="intro-container">
            <div className="intro">
                <h1>Full Stack Developer</h1>
                <p>Making scalable and reliable applications </p>
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
