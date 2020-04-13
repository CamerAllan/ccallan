import React from 'react';
import { createHistory,LocationProvider }from "@reach/router";
import ReactGA from "react-ga";
import { TRACKING_ID, HOSTNAME } from '../constants/Constants';

// Initialize google analytics goodies for content
// Exclude hits on dev site

const inProd = typeof window !== 'undefined' && document.location.hostname.search(HOSTNAME) !== -1

let history: any = null;

if (inProd) {
    ReactGA.initialize(TRACKING_ID);
    history = createHistory(window as any);
    history.listen( (window: any) => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log('page=>',window.location.pathname);
    });
}

const Analytics: React.FC<any> = (props) => {

    return inProd ? 
    <LocationProvider history={history} >{props.children}</LocationProvider> : 
    props.children

}

export default Analytics;