import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ logger }) {

    logger.log('Home : App component rendered');
    logger.info('Home : This is an info message');
    logger.warn('Home : This is a warning message');
    logger.error('Home : This is an error message');
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page.</p>
            <Link to="/log">This is a Log</Link> {/* Add a link to the new page */}
        </div>
    );
}

export default HomePage;