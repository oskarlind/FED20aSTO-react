import React from 'react'
import ReactGA from 'react-ga';

const GoogleAnalytics = (props) => {

    ReactGA.initialize('UA-179980272-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return <div></div>
}

export default GoogleAnalytics 
