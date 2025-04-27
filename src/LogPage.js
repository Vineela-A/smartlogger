import React from 'react';
import { Link } from 'react-router-dom';

function LogPage({ logger }) {
    logger.log('LogPage : App component rendered');
    logger.info('LogPage : This is an info message');
    logger.warn('LogPage : This is a warning message');
    logger.error('LogPage : This is an error message');
    return (
        <div>
            <h1>Log Page</h1>
            <p>This is the log page where you can display logs or other information.</p>
            <Link to="/">This is a Home</Link>
        </div>
    );
}

export default LogPage;