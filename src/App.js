import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import MapComponent from "./components/Maps/MapComponent";
import AdminPanel from "./components/Admins/AdminPanel";

const tokenKey = 'pk.eyJ1IjoidHlwb2RpbiIsImEiOiJjbGU0ZDFxMHAwMXVwM3NtcGdkbXpnMmN2In0.wIc1bwbiPT7eQEf6y4TgEA';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MapComponent token={tokenKey} />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    );
}

export function renderToDom(container) {
    render(<App />, container);
}