import React from 'react';
// @ts-ignore
import * as styles from '../styles/App.css';
import Navbar from '../components/Navbar';

export default () => <div className={styles}>
    <Navbar />
    <div className="intro-container">
        <div className="intro">
            <h2>Full Stack Developer</h2>
            <p>Making scalable and reliable applications </p>
        </div>

    </div>

</div>;
