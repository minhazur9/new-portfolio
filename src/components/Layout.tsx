import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';

const Layout = ({ children }: any) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
        </div>
    )

}

export default Layout

