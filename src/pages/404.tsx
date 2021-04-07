import React from 'react'
import Layout from '../components/Layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="not-found-page">
                <div className="not-found-message">
                    <h1>404</h1>
                    <p>Sorry page doesn't exist</p>
                </div>

            </div>

        </Layout>
    )
}

export default NotFound