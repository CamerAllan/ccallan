import React from 'react';
import { createHistory,LocationProvider }from "@reach/router";
import ReactGA from "react-ga";
import { DOMAIN } from '../constants/Constants';

// Initialize google analytics goodies for content
// Exclude hits on dev site

const inProd = document.location.hostname.search(DOMAIN) !== -1

let history: any = null;

if (inProd) {
    ReactGA.initialize("UA-163465341-1");
    history = createHistory(window as any);
    history.listen( (window: any) => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log('page=>',window.location.pathname);
    });
}

const Analytics: React.FC<any> = (props) => {

    const dev = props.children
    const prod = <LocationProvider history={history} >{dev}</LocationProvider>

    return inProd ? prod : dev

}

export default Analytics;