import 'semantic-ui-css/semantic.min.css';
import React from 'react';

import { Segment } from 'semantic-ui-react';

import { Home } from './pages';
import { Footer } from './components';

export default function App() {
    return (
        <>
            <Segment basic padded style={{ backgroundColor: '#f6f6f6' }}>
                <Home />
            </Segment>
            <Footer />
        </>
    );
}
