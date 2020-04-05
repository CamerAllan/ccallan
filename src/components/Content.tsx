import React from "react";
import { Router } from "@reach/router";
import Dynamic from "containers/Dynamic";
import { Routes } from "react-static";

export default () => (
    <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
        </Router>
    </React.Suspense>
)